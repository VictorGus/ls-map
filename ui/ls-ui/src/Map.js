import React, {Component} from 'react';
import {VectorMap} from 'react-jvectormap'

const testArray = [{name: "House", coords: [59.937332, 30.408868 ]}]

function getData () {
  return fetch("http://localhost:8899/load-data", {method: 'GET'})
}

class LSMap extends Component {
  componentDidMount() {
    getData().then(response => response.json());
  }
  render() {
    return (
      <div style={{width: 1500, height: 500}}>
        <VectorMap map={'world_mill'}
                   backgroundColor="#3b96ce"
                   markers= {[{name: "House", latLng: [59.937332, 30.408868]}]}
                   ref="map"
                   containerStyle={{
                     width: '100%',
                     height: '100%'
                   }}
                   containerClassName="map"
        />
      </div>
    );
  }
}

export default LSMap;
