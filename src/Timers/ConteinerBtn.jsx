import React from "react";
export default class ResetBtn extends React.Component{
    btnIsStarted;
    constructor(props){
        super();
        this.isEnabled = props.btnIsStarted;
    }

    componentWillReceiveProps(nextProps)
    {
       this.isEnabled = nextProps.btnIsStarted;
    }


    render() {
        return(
            <div>
                {this.isEnabled ? <div className='isEnabled'>Status:Enabled</div> : <div className='isDisabled'>Status:Disabled</div>}
            </div>
        )

    }
}