import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import StartBtn from './PlayButton'
import ConteinerBtns from './ConteinerBtn'

export default class Timer extends Component {

    constructor(props)
        {
            super(props);
            this.state = {
                isStarted:false,
                seconds:0
            };

            this.myRef = React.createRef();
        }

    callBackBtnStart = () => {
        if (this.myRef.current.value) {
            this.setState({isStarted:true, seconds: this.toSeconds(this.myRef.current.value)});
            this.timer = setInterval(this.tick,600);
            return true;
        } else {
            return false;
        }
    };

    convertToNormalFormat = (t) => {
        let result = t;
        if (t<10)
        {
            result = "0" + t
        }
        return result
    };

    toSeconds = (splitedTime) => {

        const bufferArr = splitedTime.split(':');
        const minutes = bufferArr[0];
        return parseInt(minutes * 60) + parseInt(bufferArr[1]);
    };

    callBackBtnStop = () => {
        this.setState({isStarted:false, seconds: 1000});
        clearInterval(this.timer);
    };

    convertToNFormat = (seconds) => {
       let minutes = Math.floor(parseInt(seconds) / 60);
        let remainSeconds = parseInt(seconds) - minutes * 60 ;
        return this.convertToNormalFormat(minutes) + ":" + this.convertToNormalFormat(remainSeconds);
    };

    tick = () => {
        if (this.state.seconds === 0 ) {
            this.callBackBtnStop()
        }
        this.setState({seconds:this.state.seconds - 1});
        this.myRef.current.value = this.convertToNFormat(this.state.seconds);
        console.log(this.state.seconds)
    };

    componentWillUnmount()
    {
        this.callBackBtnStop()
    }

    render()
    {
                return (
                    <div>
                        <div className='titleTimer'>Timer</div>
                        <InputMask className='inputTimer' {...this.props}  ref={this.myRef} mask="99:99" maskChar=""/>
                        <div>
                            <StartBtn callBackPlay={this.callBackBtnStart} callBackStop={this.callBackBtnStop}/>
                            <div className='statusBar'>
                                <ConteinerBtns btnIsStarted={this.state.isStarted}/>
                            </div>
                        </div>


                    </div>
                )


    }
}


