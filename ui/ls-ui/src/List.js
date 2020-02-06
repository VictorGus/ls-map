import React, {Component} from 'react';
import Item from './Item.js'
import {Card, Button, CardTitle, CardText, Row, Col, CardLink} from 'reactstrap';
import SearchInput, {createFilter} from 'react-search-input'

/* const FILTER_KEYS =  */

function formList (items) {
  return items.map(el => <Item url={el.url} name={el.name} country={el.country} city={el.city} description={el.description}/>
  )
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
        <Button variant="primary" onclick={(e) => {
          document.cookie = "whatToRender=world_mill"
          window.location.reload(false);
        }}>World Map</Button>
      </Col>
    );
  }
}

export default List;

