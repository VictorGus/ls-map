import React, {Component} from 'react';
import {Card, Button, CardTitle, CardText, Row, Col, CardLink} from 'reactstrap';


class Items extends Component {
  render() {
    return(
      <Card body>
        <CardTitle>First title</CardTitle>
        <CardText>Test testoviy testa</CardText>
        <CardLink href="#">Card Link</CardLink>
      </Card>
    );
  }
}

export default Items;
