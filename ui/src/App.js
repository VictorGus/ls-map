import React, { Component } from 'react';
import LSMap from "./Map.js"
import RingLoader from "react-spinners/RingLoader";

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      loading: true
    }
  this.loadingEvent = this.loadingEvent.bind(this);
  this.loadMap = this.loadMap.bind(this);
  }

  componentWillMount() {
    this.loadingEvent();
  }

  loadingEvent() {
    setTimeout(() => {this.setState(state => ({loading: false}))}, 900);
  }

  loadMap() {
    if (!this.state.loading) {
      return (<LSMap/>);
    }
  }

  render() {
    return (
      <div>
      <RingLoader css="position: absolute; top: 40%; left: 50%; margin-top: -30px; margin-left: -50px; width: 100px; height: 100px;"
                  size={150}
                  color="blue"
                  loading={this.state.loading}/>
      {this.loadMap()}
      </div>
    );
  }
}

export default App;
