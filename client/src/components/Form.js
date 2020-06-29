import React from 'react'
import axios from 'axios'

class Form extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          task: "",
          duration: 0,
          day: "Monday"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let taskSend = this.state.task;
        let durationSend = this.state.duration;
        let daySend = this.state.day;
        try
        {
            axios.post("http://localhost:5000/add",{
                task: taskSend,
                duration: durationSend,
                day: daySend
            })
                .then(() => window.location.reload());
        }
        catch(e) {
            console.log("Error " + e);
        }
        this.setState({
            task: "",
            duration: "",
            day: "Monday"
        });
    }

    render() {
        return (<div className="form">
            <h2>Add task</h2>
            <form>
                <input type="text" name="task" placeholder="Task" onChange={e => this.handleChange(e)} value={this.state.task} />
                <input type="number" name="duration" placeholder="Duration" onChange={e => this.handleChange(e)} value={this.state.duration} />
                <select name="day" value={this.state.day} onChange={e => this.handleChange(e)}>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
                <button onClick={e => this.handleSubmit(e)}>Add</button>
            </form>
        </div>);
    }
}

export default Form;
