import React, {Component} from 'react';
class Clicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicks: 0
        }
        // binding-ul este necesar pentru ca metodele claselor
        // nu sunt legate de contextul claselor
        // ci de contextul in care se executa
        // de aceea this nu va functiona daca metoda e apelata
        // ca un callback
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}> You clicked me {this.state.clicks} times
                </button>
            </div>
        )
    }
    handleClick() {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }
}

export default Clicker;