import React from "react";

export default class ResetBtn extends React.Component{

    constructor(props){
        super();
        this.callBack = props.resetCallBack;
    }
    render() {
        return <button className='resetBtn' onClick={this.callBack}>Reset</button>
    }
}