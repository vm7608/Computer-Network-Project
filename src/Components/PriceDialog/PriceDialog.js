import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

/*
 * This is a controlled component (e.g. state comes from parent) which allows user to enter price range.
 */
class PriceDialog extends Component {

    render() {

        let { min, max } = this.props;

        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={() => {
                        this.props.onClose();
                    }}>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <DialogTitle>Enter price range</DialogTitle>

                        <div style={{ display: "flex", padding: 20 }}>
                            <TextField
                                value={min}
                                type="number"
                                style={{ width: 70 }}
                                placeholder="Min"
                                label="Min"
                                onChange={(e) => {
                                   
                                    if (parseInt(e.target.value, 10) < 0  || parseInt(e.target.value, 10) > 100000) return;
                                    this.props.onChange(e.target.value, max);
                                }} />
                            <TextField
                                value={max}
                                type="number"
                                style={{ width: 70, marginLeft: 20 }}
                                placeholder="Max"
                                label="Max"
                                onChange={(e) => {
                                    if (parseInt(e.target.value, 10) < 0  || parseInt(e.target.value, 10) > 100000) return;
                                    this.props.onChange(min, e.target.value);
                                }} />
                        </div>
                        <div style={{ display: "flex", padding: 20 }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{ width: 50 }}
                                onClick={() => {
                                    if(min === "" || max === "") return;
                                    this.props.onSave();
                                }}>OK
                            </Button>
                            <Button
                                color="primary"
                                variant="outlined"
                                style={{ width: 50, marginLeft: 5 }}
                                onClick={() => {

                                    this.props.onClose()

                                }}>
                                Hủy
                            </Button>
                        </div>
                    </div>
                </Dialog>
            </div>


        );
    }
}


export default PriceDialog;