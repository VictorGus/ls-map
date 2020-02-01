import React, {Component} from 'react';
import {VectorMap} from 'react-jvectormap'

class LSMap extends Component {
  render() {
    return (
      <div style={{width: 1500, height: 500}}>
      <VectorMap map={'world_mill'}
      backgroundColor="#3b96ce"
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
