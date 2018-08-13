import ReactDOM from "react-dom";
import MainComponent from "./MainComponent";
import React from "react";

class Menu {
    static showMenu() {
        ReactDOM.render(<MainComponent/>, document.getElementById('root'));
    }
}
export default Menu;