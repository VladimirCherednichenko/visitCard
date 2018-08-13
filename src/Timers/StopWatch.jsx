import React, { Component } from 'react';
import './StopWatch.css';
import Playbtn from "./PlayButton";
import TimerLabel from "./TimeLabel";
import ResetButton from "./ResetBtn"
import './Timer.css';

class StopWatch extends Component {

    constructor(props)
    {
        super(props);
        this.state =
            {
                timeState:"Play",
                elapsedTime:0

            };
        this.oldElapsedTime = 0;
    }

    callBackStop = () => {
        clearInterval(this.timer);
        this.oldElapsedTime = this.state.elapsedTime;
        this.setState({timeState:"Play", min:1})
    };

    tick = () => {
        this.setState({elapsedTime:new Date() - this.start + this.oldElapsedTime})
    };

    callBackPlay = () => {

        this.start = new Date;
        this.timer = setInterval(this.tick,50);
        this.setState({timeState:"Stop"});
        return true
    };

    convertToNormalFormat = (t) => {
        let result = t;
        if (t<10)
        {
          result = "0" + t
        }

        return result

    };

    callBackReset = () => {
        this.oldElapsedTime = 0;
        this.callBackStop();
        this.setState({elapsedTime:0});
    };


  render()
  {
      let seconds = Math.round(this.state.elapsedTime / 1000);
      let minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;



      return(
          <div>
              <div className='titleStopWatch'>StopWatch</div>

              <div>
                  <TimerLabel min = {this.convertToNormalFormat(minutes)} sec = {this.convertToNormalFormat(seconds)}/>
              </div>

              <div className='btnPanel'>
                  <Playbtn callBackStop = {this.callBackStop} callBackPlay = {this.callBackPlay}/>
                  <ResetButton resetCallBack = {this.callBackReset}/>
              </div>
          </div>
      )



  }
}

export default StopWatch;
