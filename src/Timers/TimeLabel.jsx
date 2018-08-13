import React from "react";

export default class PlayButton extends React.Component {
    constructor(props)
    {
        super(props);

        this.state
        {
            min:props.min
            sec:props.sec
        }

    }



    render()
    {
        return(
            <div>
            <div>
            <label>{this.props.min}</label>
            <label>:</label>
            <label>{this.props.sec}</label>
            </div>
            </div>
        )
    }
}