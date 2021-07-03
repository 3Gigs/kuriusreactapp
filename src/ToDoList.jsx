import React from "react";

class MakeTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [], 
        }
        this.AddTask = this.AddTask.bind(this);
    }
    AddTask() {
        const task = prompt("Enter task");
        this.setState((prevState) => {
            return {tasks: [...prevState.tasks, task]}
        })
    }
    render() {
        return(
            <div className="TaskTable">
                <button onClick={this.AddTask}>Add task</button>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map(task => (
                            <tr key={task}>
                                <td>{task}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}   

export function MakeBoard() {
    return (
        <div className="ToDoList">
            <h4>Tasks to complete</h4>
            <MakeTasks />
        </div>
    )
}