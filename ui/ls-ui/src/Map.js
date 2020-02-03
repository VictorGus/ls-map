import React, {Component} from 'react';
import {VectorMap} from 'react-jvectormap'
import {Col, Row, OverlayTrigger} from 'reactstrap'
import Item from './List.js'

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
        <Row>
          <Col xs='8' style={{'padding-right': 0}}>
            <VectorMap map={'world_mill'}
                       backgroundColor="#3b96ce"
                       markers= {[{name: dataSet.name, latLng: dataSet.coords}]}
                       ref="map"
                       containerStyle={{
                         width: '100%',
                         height: '100vh'
                       }}
                       containerClassName="map"
            />
          </Col>
          <Col xs='4'>
            <Item/>
            <Item/>
            <Item/>
          </Col>
        </Row>
    );
  }
}

export default LSMap;
