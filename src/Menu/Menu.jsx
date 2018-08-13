import React,{Component} from 'react'
import './Menu.css'
import Draggable from 'react-draggable'
import ToDoList from "../ToDoList/ToDoListWraper";
import Stopwatch from "../Timers/StopWatch.jsx";
import Timer from "../Timers/Timer.jsx";




class Menu extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            currentApp:null
        }
    }
    render(){
        const  currentApp = this.state.currentApp;

        return(
            <div className = 'menu'>
                <div className='backgroundImage'>
                </div>
                <div className="menuItemsHolder">
                    <ul className="flex-container menuItemsHolder">
                        <li className="flex-item" onClick={()=>{this.setState({currentApp:<ToDoList/>})}}>React ToDOList</li>
                        <li className="flex-item" onClick={()=>{this.setState({currentApp:<Stopwatch/>})}}>React Stop- watch</li>
                        <li className="flex-item" onClick={()=>{this.setState({currentApp:<Timer/>})}}>Timer</li>
                        <li className="flex-item emptyItem"/>
                    </ul>
                </div>
                <div className="footer ">
                    <ul className="footerItemsHolder">
                        <li className="flex-item gitHubImg" onClick={() => {window.open("https://github.com/VladimirCherednichenko")}}/>
                        <li className="flex-item facebookImg" onClick={() => {window.open("https://www.facebook.com/profile.php?id=100007546218626")}}/>
                        <li className="flex-item linkedInImg" onClick={() => {window.open("https://linkedin.com/in/cherednichenko-971")}}/>
                        <li className="flex-item gmailImg" onClick={() => {window.open("https://mail.google.com/mail/?view=cm&fs=1&to=cherid95@gmail.com")}}/>
                    </ul>
                    <span className="skype-button bubble " data-color="#000" data-contact-id="dartveidor97"/>

                </div>
                {currentApp != null ?
                    <Draggable handle='header'>
                        <div className='appContainer'>
                            <header>
                                <div className="appHeader">
                                    <div className='quiteButton' onClick={() => {
                                        this.setState({currentApp: null})
                                    }}>X</div>
                                    <div className='emptyButton'/>
                                    <div className='emptyButton'/>
                                </div>
                            </header>
                            <div id="appHolder" className="appHolder">{currentApp}</div>
                        </div>
                    </Draggable>:null
                }

            </div>
        )
    }
}
export default Menu;