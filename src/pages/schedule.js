import Layout from '@theme/Layout';
import React from 'react';
import HeroScheduleSection from './heroSectionSchedule'
import {Container, Row, Col} from 'react-bootstrap'



function home() {
    return (
        <Layout title={'Schedule'}>
        <HeroScheduleSection />
        <Container>
          <Row>
                <Col>column 3</Col>
                <Col>column 4</Col>
                <Col>column 5</Col>
                <Col>column 6</Col>
                <Col>column 7</Col>
          </Row>
          <Row>
                <Col>column 3</Col>
                <Col>column 4</Col>
                <Col>column 5</Col>
                <Col>column 6</Col>
                <Col>column 7</Col>
          </Row>
        </Container>

        </Layout>
    )
}

export default home;