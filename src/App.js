import React, { Component } from 'react';
import FieldType from './components/index';
import {
  Card,
  CardBody,
  Col,
} from 'reactstrap';
import './App.css';

class App extends Component {
  
  render() {
    const style ={
      textAlign: 'center',
      backgroundColor: '#1EB263'
    };
    return (
      <Card>
        <CardBody>
          <Col style={style}>
            <FieldType />
            </Col>
         </CardBody>
       </Card> 
    );
  }
}

export default App;
