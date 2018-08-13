import React from "react";

export default class ResetBtn extends React.Component{

    constructor(props){
        super();
        this.callBack = props.callBack;
    }
    render() {
        return <button onClick={this.callBack}>Start</button>
    }
}