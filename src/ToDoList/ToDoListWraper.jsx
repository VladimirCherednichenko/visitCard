import React,{Component} from 'react'
import './ToDoList.css'

class ToDoList extends Component{
    constructor(props) {
                super(props);
                this.state = {
                    items: []
                };
                this.myInput = React.createRef();
            }


            addTask = () => {
                console.log(this.myInput.current.value);




                const newItem = {
                    text: this.myInput.current.value,
                    id: Date.now()
                };


                this.setState(prevState => ({
                    items: this.items = this.state.items.concat(newItem)
                }));
                console.log(this.state.items);
            }

            delBtnClick = (idToDel) =>
            {
                return function dellItem()
                {
                    var buferItems = this.state.items;

                    for (var i = 0; i < buferItems.length; i++ ) {
                        if (buferItems[i].id === idToDel) {
                            buferItems.splice(i, 1);
                            break;
                        }
                    }
                    this.setState({ items: buferItems });
                }.bind(this);
            }

            styleDecor = (event) => {
                console.log(event.target);
                if(event.target.style.textDecoration === '')
                {
                    event.target.style.textDecoration = 'line-through';
                }
                else
                {
                    event.target.style.textDecoration = '';
                }
            }

            render() {
                console.log("render")
                return (

                    <div className='container'>
                        <div className='title'>
                            ToDoList
                        </div>
                        <div className='inputContainer'>
                            <input type="text" ref={this.myInput} className = 'inputTask'/>
                            <button onClick={this.addTask} className='addButton'>AddTask</button>
                        </div>
                        <h3>
                            Needs to be done:
                        </h3>
                        <div className="taskHolder">
                            {
                                this.state.items.map((item, index) => (

                                    <div className="task">
                                        <button className="delButton" onClick={this.delBtnClick(item.id)}>X</button>
                                        <p className="taskText" onClick={this.styleDecor}>{item.text}</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                );
            }
        }
        export default ToDoList