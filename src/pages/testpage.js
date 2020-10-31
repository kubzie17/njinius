import React from 'react';
import Layout from '@theme/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Button, Alert, Breadcrumb, Card} from 'react-bootstrap'
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { MDBContainer} from 'mdbreact'
import Car from "../../static/video/car.mp4" 
import Var from "../../static/video/van.mp4" 
import bik from "../../static/video/bike.mp4" 

function Hello() {
  return (
    <Layout title="Hello">
        

            <Container>
            <Card>
                <Card.Img className={styles.featureImage} src={useBaseUrl('img/Njinius.svg')}/>
                <Card.Body>
                    <Card.Title>Card Example</Card.Title>
                    <Card.Text>This is an example of the bootstrap cards</Card.Text>
                    <Button variant="primary">read more</Button>
                    
                </Card.Body>

            </Card>
            <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test2</Breadcrumb.Item>
            <Breadcrumb.Item active>Test3</Breadcrumb.Item>
            
            </Breadcrumb>
            <Alert variant="success">This is a button</Alert>
            <Button>Test Button</Button>  
            <Row>
                <Col><Card>
                <Card.Img className={styles.featureImage} src={useBaseUrl('img/Njinius.svg')}/>
                <Card.Body>
                    <Card.Title>Card Example</Card.Title>
                    <Card.Text>This is an example of the bootstrap cards</Card.Text>
                    <Button variant="primary">read more</Button>
                    
                </Card.Body>

            </Card></Col>
                <Col><Card>
                <Card.Img className={styles.featureImage} src={useBaseUrl('img/Njinius.svg')}/>
                <Card.Body>
                    <Card.Title>Card Example</Card.Title>
                    <Card.Text>This is an example of the bootstrap cards</Card.Text>
                    <Button variant="primary">read more</Button>
                    
                </Card.Body>

            </Card></Col>
                <Col>column 3</Col>
                <Col>column 4</Col>
                <Col>column 5</Col>
                <Col>column 6</Col>
                <Col>column 7</Col>



            </Row>
            </Container> 

            <Container>
            <MDBContainer>
  
  <div className="embed-responsive embed-responsive-21by9">
    <iframe className="embed-responsive-item" src={Car}></iframe>
    <br></br>
  </div>

  <div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src={Var}></iframe>
  </div>

  <div className="embed-responsive embed-responsive-4by3">
    <iframe className="embed-responsive-item" src={bik}></iframe>
  </div>
 

</MDBContainer>
            </Container> 

    </Layout>
  );
}

export default Hello;