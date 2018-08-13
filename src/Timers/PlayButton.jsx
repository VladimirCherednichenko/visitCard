import React from "react";
import PropTypes from 'prop-types';

export default class PlayButton extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            timerState:"Play"
        };
        this.callBackStop = props.callBackPlay;
        this.callBackPlay = props.callBackStop;
    }

    changeState = () => {

        if (this.state.timerState === "Play") {
            //his.setState({timerState:"Stop"});
            if (this.callBackStop()) {
                this.setState({timerState:"Stop"});
            }
        } else {
            this.setState({timerState:"Play"});
            this.callBackPlay()
        }

    };
    render() {
        return (
            <div>
            {this.state.timerState === "Play" ?
            <button className = 'startBtn' onClick={this.changeState}>Start</button>
                :<button className = 'stopBtn' onClick={this.changeState}>Stop</button>
            }
            </div>)
    }
}