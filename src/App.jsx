import React from "react";
import {MakeBoard} from "./ToDoList.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        }
    }
    render() {
        return (
            <div className="main">
                <h1>Welcome, {this.state.name}</h1>
                <MakeBoard />
            </div>
        );
    }
}