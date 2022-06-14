import React, { Component } from 'react';
import "./Item.css";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { connect } from "react-redux";
import { addItemInCart } from "../../Redux/Actions"
import { withRouter } from "react-router-dom";


/*
 * This is a card like component which shows info about single product (e.g. when you see search result of products).
 * 
 */
class ConnectedItem extends Component {

    render() {
        return (
            <div className="item" style= {{height: this.props.mini? "220px": "320px",  width:this.props.mini?"170px":"220px"} } onClick={() => {
                this.props.history.push('/details/' + this.props.item.id);
            }}>
                <div style={{color: "gray", margin: 5, fontSize: 16, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{this.props.item.name}</div>
                <div style={{height: this.props.mini? 160:210, width:this.props.mini? 170:270 }}>  <img   alt={this.props.item.name} height={this.props.mini? 160:210} width = {this.props.mini? 170:220} src={this.props.item.imageURL} /> </div>
                <div style={{color: "gray", float:"left", margin: 10, fontSize: 16 }}>Giá: {this.props.item.price} $</div>
                <div style={{color: "gray", float:"right", margin: 10,  fontSize: 13 }}>{this.props.item.popular && "Popular"}</div>

                {!this.props.mini && <div className="details-btn-div">
                    <Button onClick={(e) => {
                        e.stopPropagation();
                        this.props.history.push('/details/' + this.props.item.id);
                    }}>
                        Chi tiết
                    </Button>
                </div>}
                {!this.props.mini && <div className="add-btn-div">
                    <IconButton onClick={(e) => {
                        e.stopPropagation();
                        this.props.dispatch(addItemInCart({ ...this.props.item, quantity: 1 }));
                    }} color="primary" aria-label="Add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </div>}
            </div>


        );
    }
}

export default withRouter(connect()(ConnectedItem));
