import React, {Component} from 'react';
import {VectorMap} from 'react-jvectormap'

const testArray = [{name: "House", coords: [59.937332, 30.408868 ]}]

function getData () {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', "http://localhost:8899/load-data", false);
  xhr.send();
  return JSON.parse(xhr.responseText)
}

let dataSet = getData();

class LSMap extends Component {
 render() {
    return (
      <div style={{width: 1500, height: 500}}>
        <VectorMap map={'world_mill'}
                   backgroundColor="#3b96ce"
                   markers= {[dataSet]}
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
