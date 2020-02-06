import React, {Component} from 'react';
import Item from './Item.js'
import {Card, Button, CardTitle, CardText, Row, Col, CardLink} from 'reactstrap';
import getCookie from './utils.js'
import SearchInput, {createFilter} from 'react-search-input'

/* const FILTER_KEYS =  */

function formList (items) {
  return items.map(el => <Item url={el.url} name={el.name} country={el.country} city={el.city} description={el.description}/>
  )
}

function isWorldMap() {
  if (getCookie("whatToRender") != "world_mill") {
    return (
      <Button variant="primary" onClick={(e) => {
        document.cookie = "whatToRender=world_mill"
        window.location.reload(false);
      }}>World Map</Button>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    /* this.searchUpdated = this.searchUpdated.bind(this) */
  }

  render() {
    return(
      <Col xs='4'>
        <SearchInput style={{margin: "0 0 10px 0", width: "100%"}}/>
        {formList(this.props.data)}
        {isWorldMap()}
      </Col>
    );
  }
}

export default List;
