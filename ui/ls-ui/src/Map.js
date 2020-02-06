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

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

class LSMap extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        /* whatToRender: "world_mill" */
      }
    if(!getCookie("whatToRender")){
      document.cookie = "whatToRender=world_mill"
    }
  }

  render() {
    let dataSet = getData();
    return (
      <Row>
        <Col xs='8' style={{'padding-right': 0}}>
          <VectorMap map={getCookie("whatToRender")}
                     backgroundColor="#3b96ce"
                     onRegionClick={(e, code) => {
                       document.cookie = "whatToRender=de_mill"
                       window.location.reload(false);
                       //this.setState({whatToRender: code.toLowerCase()+"_mill"})
                     }}
                     markers= {dataSet.map(el => {
                       return {name: el.name, latLng: el.coords}
                     })}
                     ref={this.state.whatToRender}
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
