import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from "react-redux";
import { showCartDlg, setCheckedOutItems } from "../../Redux/Actions"
import { withRouter } from 'react-router-dom'
import CartRow from "./CartRow"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';


const mapStateToProps = state => {
    return { open: state.showCartDialog, items: state.cartItems };
};


class ConnectedCartDialog extends Component {

    render() {

        /* Total price of items in the cart */
        let totalPrice = this.props.items.reduce((accumulator, item) => {
            return accumulator + item.price * item.quantity;
        }, 0);


        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={() => {
                        this.props.dispatch(showCartDlg(false))
                    }}>

                    {/* Title */}
                    <div style={{ display: "flex", marginTop: 25 }}>
                        <ShoppingCartIcon fontSize="large" style={{ marginLeft: 10, color: "#4282ad" }} />
                        <div style={{ marginTop: 10, marginLeft: 10, fontSize: 16, color: "gray" }}>Sản phẩm trong giỏ hàng</div>
                    </div>

                    {/* Render the actual table */}
                    <div style={{ minWidth: 300, maxHeight: 400, overflow: "auto" }}>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Sản phẩm</TableCell>
                                    <TableCell>Giá</TableCell>
                                    <TableCell>Số lượng</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.items.map((item, index) => {
                                    return (<CartRow item={item} key={item.id} {...this.props} />)
                                })}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Footer related stuff */}
                    <div style={{ marginTop: 20 }}>
                        <div style={{ float: "left", margin: 10, marginTop: 20, fontSize: 15, color: "gray", fontWeight: "bold" }}> Tổng tiền: {totalPrice} $</div>
                        <Button style={{ float: "right", margin: 10 }}
                            variant="outlined"
                            color="primary"
                            disabled={totalPrice === 0}
                            onClick={() => {
                                this.props.dispatch(showCartDlg(false));
                                this.props.dispatch(setCheckedOutItems(this.props.items))
                                this.props.history.push('/order');
                            }}>Thanh toán</Button>
                    </div>
                </Dialog>
            </div>


        );
    }
}
const CartDialog = withRouter(connect(mapStateToProps)(ConnectedCartDialog));
export default CartDialog;