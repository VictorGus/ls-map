import React, {Component} from 'react';
import Alarm from './Alarm.js'
import {VectorMap} from 'react-jvectormap'
import {Col, Row, OverlayTrigger} from 'reactstrap'
import List from './List.js'
import {getCookie, normalize} from './utils.js'

const SUPPORTED_MAPS = ["oceania_mill", "ar_mill", "brazil", "co_mill", "europe_mill", "ch_mill", "world_mill", "indonesia", "north_america_mill", "se_mill", "th_mill", "fr_mill", "ca_lcc", "south_america_mill", "continents_mill", "asia_mill", "es_mill", "kr_mill", "vietnam", "us_aea", "africa_mill", "de_mill"]

function getData () {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', "http://localhost:8899/load-data", false);
  xhr.send();
  return JSON.parse(xhr.responseText)
}

class LSMap extends Component {
  constructor(props) {
    super(props)
    this.cookieValue = getCookie("whatToRender");
    this.dataSet = getData();
    this.state = {
      isAlert: null
    };
    this.baseState = this.state;
    this.handleClick = this.handleClick.bind(this);

    if (!SUPPORTED_MAPS.includes(this.cookieValue)){
      document.cookie = "whatToRender=world_mill"
    }
  }

  handleClick (e, code) {
    if (!SUPPORTED_MAPS.includes(normalize(code))) {
      this.setState(state => ({isAlert: !state.isAlert}))
    } else {
      document.cookie = `whatToRender=${normalize(code)}`
      window.location.reload(false);
    }
  }

  renderAlarm(state) {
    if (state.isAlert) {
      return (<Alarm/>);
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs='8' style={{'padding-right': 0}}>
            <VectorMap map={this.cookieValue}
                       backgroundColor="#3b96ce"
                       onRegionTipShow={(e, el, code) => {
                         if (!SUPPORTED_MAPS.includes(normalize(code))) {
                           e.preventDefault();
                         }
                       }}
                       onRegionClick={this.handleClick}
                       markers= {this.dataSet.map(el => {
                         return {name: el.name, latLng: el.coords, country: el.country, city: el.city}
                       })}
                       containerStyle={{
                         width: '100%',
                         height: '100vh'
                       }}
                       containerClassName="map"
            />
          </Col>
          <List data={this.dataSet}/>
        </Row>
        {this.state.isAlert ? <Alarm/> : null}
      </div>
    );
  }
}

export default LSMap;
