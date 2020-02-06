import React, {Component} from 'react';
import {VectorMap} from 'react-jvectormap'
import {Col, Row, OverlayTrigger} from 'reactstrap'
import List from './List.js'
import getCookie from './utils.js'

const SUPPORTED_MAPS = ["oceania_mill", "ar_mill", "brazil", "co_mill", "europe_mill", "ch_mill", "world_mill", "indonesia", "north_america_mill", "se_mill", "th_mill", "fr_mill", "ca_lcc", "south_america_mill", "continents_mill", "asia_mill", "es_mill", "kr_mill", "vietnam", "us_aea", "africa_mill", "de_mill"]

function getData () {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', "http://localhost:8899/load-data", false);
  xhr.send();
  return JSON.parse(xhr.responseText)
}

function LSMap(props) {
  let cookieValue = getCookie("whatToRender");
  let dataSet = getData();

  if (!SUPPORTED_MAPS.includes(cookieValue)){
    document.cookie = "whatToRender=world_mill"
  }

  return (
    <Row>
      <Col xs='8' style={{'padding-right': 0}}>
        <VectorMap map={getCookie("whatToRender")}
                   backgroundColor="#3b96ce"
                   onRegionClick={(e, code) => {
                     if (!SUPPORTED_MAPS.includes(code.toLowerCase() + "_mill")){
                     } else {
                       document.cookie = `whatToRender=${code.toLowerCase() + "_mill"}`
                       window.location.reload(false);
                     }
                   }}
                   markers= {dataSet.map(el => {
                     return {name: el.name, latLng: el.coords}
                   })}
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

export default LSMap;
