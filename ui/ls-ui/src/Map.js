import React, {Component} from 'react';
import Alarm from './Alarm.js'
import {VectorMap} from 'react-jvectormap'
import Item from './Item.js';
import {Col, Button, Row, OverlayTrigger} from 'reactstrap'
import {getCookie, normalize, getCountryByCode, deleteCookie} from './utils.js'
import SearchInput, {createFilter} from 'react-search-input'
import ScrollAree from 'react-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';


const SUPPORTED_MAPS = ["oceania_mill", "ar_mill", "brazil", "co_mill", "europe_mill", "ch_mill", "world_mill", "indonesia", "north_america_mill", "se_mill", "th_mill", "fr_mill", "ca_lcc", "south_america_mill", "continents_mill", "asia_mill", "es_mill", "kr_mill", "vietnam", "us_aea", "africa_mill", "de_mill"]

const FILTER_KEYS = ['country', 'city', 'name'];

function formList (items) {
  return items.map(el => <Item url={el.site} name={el.name} country={el.country} city={el.city} rankingPlace={el.rankingPlace} description={el.description}/>
  )
}

function isWorldMap() {
  if (getCookie("whatToRender") != "world_mill") {
    return (
      <Button style={{"margin-bottom": 10 }} variant="primary" onClick={(e) => {
        document.cookie = "whatToRender=world_mill"
        deleteCookie("filterOption");
        window.location.reload(false);
      }}>World Map</Button>
    );
  }
}

function getData () {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', "load-data", false);
  xhr.send();
  return JSON.parse(xhr.responseText)
}


class LSMap extends Component {
  constructor(props) {
    super(props)
    this.cookieValue = getCookie("whatToRender");
    let data = getData();
    let filterOption = getCookie("filterOption");
    let filteredDataSet = filterOption ? data.filter(el => el.country == filterOption) : data
    this.state = {
      searchTerm: '',
      dataSet: filteredDataSet,
      isAlert: null
    };
    this.baseState = this.state;

    this.handleClick = this.handleClick.bind(this);

    this.searchUpdated = this.searchUpdated.bind(this)

    if (!SUPPORTED_MAPS.includes(this.cookieValue)){
      document.cookie = "whatToRender=world_mill"
    }
  }

  handleClick (e, code) {
    if (!SUPPORTED_MAPS.includes(normalize(code))) {
      this.setState(state => ({isAlert: !state.isAlert}))
    } else {
      document.cookie = `whatToRender=${normalize(code)}`
      document.cookie = `filterOption=${getCountryByCode(code)}`
      window.location.reload(false);
    }
  }

  render() {
    const filteredItems = this.state.dataSet.filter(createFilter(this.state.searchTerm, FILTER_KEYS));

    return (
      <div>
        <Row>
          <Col xs='8' style={{'padding-right': 0}}>
            <VectorMap map={this.cookieValue}
                       backgroundColor="#4287f5"
                       onRegionTipShow={(e, el, code) => {
                         if (!SUPPORTED_MAPS.includes(normalize(code))) {
                           e.preventDefault();
                         }
                       }}
                       onRegionClick={this.handleClick}
                       markers= {filteredItems.map(el => {
                         return {name: el.name, latLng: el.coords, country: el.country, city: el.city}
                       })}
                       containerStyle={{
                         width: '100%',
                         height: '110vh'
                       }}
                       containerClassName="map"
            />
          </Col>
          <Col xs='4'>
            {isWorldMap()}
            <SearchInput style={{margin: "0 0 10px 0", width: "100%"}} onChange={this.searchUpdated}/>
            <PerfectScrollbar>
            {formList(filteredItems)}
            </PerfectScrollbar>
          </Col>
        </Row>
        {this.state.isAlert ? <Alarm/> : null}
      </div>
    );
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

}

export default LSMap;
