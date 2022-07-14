import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date().toLocaleTimeString('bn-BD'), locale: 'bn-BD', btnText: 'English'};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString(this.state.locale)
    });
  }

  changeLocale() {
    if(this.state.locale == 'bn-BD') {
      this.setState({
        date: new Date().toLocaleTimeString('en-US'),
        locale: 'en-US',
        btnText: 'Bangla'
      });
    } else {
      this.setState({
        date: new Date().toLocaleTimeString('bn-BD'),
        locale: 'bn-BD',
        btnText: 'English'
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.date} </h1>
        <button onClick={()=>this.changeLocale()}>Show Time in {this.state.btnText}</button>
      </div>
    );
  }
}

export default App;
