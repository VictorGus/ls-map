import React, {Component} from 'react';
import {VectorMap} from 'react-jvectormap'
import {Col, Row, OverlayTrigger} from 'reactstrap'
import List from './List.js'

function getData () {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', "http://localhost:8899/load-data", false);
  xhr.send();
  return JSON.parse(xhr.responseText)
}

class LSMap extends Component {

  render() {
    let dataSet = getData();

    return (
        <Row>
          <Col xs='8' style={{'padding-right': 0}}>
            <VectorMap map={'world_mill'}
                       backgroundColor="#3b96ce"
                       markers= {dataSet.map(el => {
                         return {name: el.name, latLng: el.coords}
                       })}
                       ref="map"
                       containerStyle={{
                         width: '100%',
                         height: '100vh'
                       }}
                       containerClassName="map"
            />
          </Col>
          <List data={dataSet}/>
        </Row>
    );
  }
}

export default LSMap;
