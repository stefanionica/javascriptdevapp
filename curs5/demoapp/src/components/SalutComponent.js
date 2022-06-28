
import React, {Component} from 'react';
class SalutComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
        subject: "",
        
      };
    console.log('Sunt in SalutComponent constructor');
  }
  componentDidMount(){
    console.log('Sunt in SalutComponent componentDidMount');
  }

  handleChange = event => {
    this.setState({
      subject: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <h1> Salut Componenta Noua {this.props.name}</h1>
        <input placeholder="Enter Subject" 
        onChange={this.handleChange}></input>
        <p><b>{this.state.subject}</b> Tutorial</p>
      </div>
    );
  }
 
}

export default SalutComponent;
