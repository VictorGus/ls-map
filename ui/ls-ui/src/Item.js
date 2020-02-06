import React, {Component} from 'react';
import Label from './Label.js'
import {Card, CardBody, Button, CardTitle, CardText, Row, Col, CardLink, CardSubtitle} from 'reactstrap';

function Item(props) {
  return(
    <Card style={{cursor: "pointer", margin: "0 0 10px 0"}}>
      <CardBody>
        <CardTitle style={{'font-weight': 'bold'}}>{props.name}</CardTitle>
        Country: <Label text={props.country}/>  City: <Label text={props.city}/>
        <CardText>{props.description}</CardText>
        <CardLink href={props.url}>Visit site</CardLink>
      </CardBody>
    </Card>
  );
}

  export default Item;
