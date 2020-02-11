import React, {Component} from 'react';
import Label from './Label.js'
import List from './List.js'
import Rank from './Rank.js'
import {Card, CardBody, Button, CardTitle, CardText, Row, Col, CardLink, CardSubtitle} from 'reactstrap';

function Item(props) {
  return(
    <Card style={{cursor: "pointer", margin: "0 0 10px 0"}}>
      <CardBody>
        <CardTitle style={{'font-weight': 'bold'}}>{props.name}</CardTitle>
        <Rank rankingPlace={props.rankingPlace}>
        </Rank>
        Страна: <Label text={props.country}/>  Город: <Label text={props.city}/>
         <List listHeader="Программы:" studyProgramms={props.studyProgramms}/>
        <CardLink href={'http://' + props.url}>Visit site</CardLink>
      </CardBody>
    </Card>
  );
}

  export default Item;
