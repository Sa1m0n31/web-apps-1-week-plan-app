import React from 'react'
import axios from 'axios'

class Plan extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        };
        this.updateList = this.updateList.bind(this);
    }

    updateList() {
        let tasks;
        this.setState({
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        });
        axios.get("http://localhost:5000/get-tasks")
            .then((res) => { tasks = res.data })
            .then(() => {
                tasks.map((item) => {
                    switch(item.day)
                    {
                        case 'Monday':
                            this.setState({
                                monday: [...this.state.monday, item]
                            });
                            break;
                        case "Tuesday":
                            this.setState({
                                tuesday: [...this.state.tuesday, item]
                            });
                            break;
                        case 'Wednesday':
                            this.setState({
                                wednesday: [...this.state.wednesday, item]
                            });
                            break;
                        case 'Thursday':
                            this.setState({
                                thursday: [...this.state.thursday, item]
                            });
                            break;
                        case 'Friday':
                            this.setState({
                                friday: [...this.state.friday, item]
                            });
                            break;
                        case 'Saturday':
                            this.setState({
                                saturday: [...this.state.saturday, item]
                            });
                            break;
                        case 'Sunday':
                            this.setState({
                                sunday: [...this.state.sunday, item]
                            });
                            break;
                        default:
                            break;
                    }
                    return 0;
                });
            });
    }

    componentDidMount() {
        this.updateList();
    }

    delete(e) {
        let taskDelete = e.target.parentElement.getAttribute("id");
        let dayDelete = e.target.parentElement.parentElement.parentElement.getAttribute("id");
        dayDelete = dayDelete[0].toUpperCase() + dayDelete.slice(1);
        axios.delete("http://localhost:5000/delete-task", {
            params: {
                task: taskDelete,
                day: dayDelete
            }
        })
        .then(() => this.updateList());
    }

    render() {
        return (
            <div className="plan">
                <div className="dayContainer" id="monday">
                    <h3>Monday</h3>
                    <ul className="dayList">
                        { this.state.monday.map((item) => (
                            <li key={item._id} className="item" id={item.task}><span className="task">{item.task}</span><span className="duration">{item.duration} min</span><span className="delete" onClick={e => this.delete(e)}>x</span></li>
                        ))}
                    </ul>
                </div>
                <div className="dayContainer" id="tuesday">
                    <h3>Tuesday</h3>
                    <ul className="dayList">
                        { this.state.tuesday.map((item) => (
                            <li key={item._id} className="item" id={item.task}><span className="task">{item.task}</span><span className="duration">{item.duration} min</span><span className="delete" onClick={e => this.delete(e)}>x</span></li>
                        ))}
                    </ul>
                </div>
                <div className="dayContainer" id="wednesday">
                    <h3>Wednesday</h3>
                    <ul className="dayList">
                        { this.state.wednesday.map((item) => (
                            <li key={item._id} className="item" id={item.task}><span className="task">{item.task}</span><span className="duration">{item.duration} min</span><span className="delete" onClick={e => this.delete(e)}>x</span></li>)
                        )}
                    </ul>
                </div>
                <div className="dayContainer" id="thursday">
                    <h3>Thursday</h3>
                    <ul className="dayList">
                        { this.state.thursday.map((item) => (
                            <li key={item._id} className="item" id={item.task}><span className="task">{item.task}</span><span className="duration">{item.duration} min</span><span className="delete" onClick={e => this.delete(e)}>x</span></li>
                        ))}
                    </ul>
                </div>
                <div className="dayContainer" id="friday">
                    <h3>Friday</h3>
                    <ul className="dayList">
                        { this.state.friday.map((item) => (
                            <li key={item._id} className="item" id={item.task}><span className="task">{item.task}</span><span className="duration">{item.duration} min</span><span className="delete" onClick={e => this.delete(e)}>x</span></li>
                        ))}
                    </ul>
                </div>
                <div className="dayContainer" id="saturday">
                    <h3>Saturday</h3>
                    <ul className="dayList">
                        { this.state.saturday.map((item) => (
                            <li key={item._id} className="item" id={item.task}><span className="task">{item.task}</span><span className="duration">{item.duration} min</span><span className="delete" onClick={e => this.delete(e)}>x</span></li>
                        ))}
                    </ul>
                </div>
                <div className="dayContainer" id="sunday">
                    <h3>Sunday</h3>
                    <ul className="dayList">
                        { this.state.sunday.map((item) => (
                            <li key={item._id} className="item" id={item.task}><span className="task">{item.task}</span><span className="duration">{item.duration} min</span><span className="delete" onClick={e => this.delete(e)}>x</span></li>
                        ))}
                    </ul>
                </div>
            </div>);
    }
}

export default Plan;
