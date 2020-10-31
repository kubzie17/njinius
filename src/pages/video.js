import React from 'react';
import Layout from '@theme/Layout';
import VideoPlayer from 'react-video-js-player';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Car from "../../static/video/car.mp4" 
import Var from "../../static/video/van.mp4" 
import bik from "../../static/video/bike.mp4" 
import {Container, Row, Col, Button, Alert, Breadcrumb, Card} from 'react-bootstrap'
import HeroSectionArchive from './heroSectionArchive'



const VideoJS = () => {
    const imgUrl1 = useBaseUrl('img/undraw_docusaurus_react.svg');
    const imgUrl2 = useBaseUrl('img/undraw_docusaurus_tree.svg');
    const imgUrl3 = useBaseUrl('img/undraw_docusaurus_tree.svg');
    const videoSrc = Car;
    const videoSrc2 = Var;
    const videoSrc3 = bik;
    
    return(
        <Layout title = "VideoJs">
           
          <HeroSectionArchive/>
          <Row>
          <Container>
          <div className="App">
              
              <h2>Exception Handling</h2>
              <div style={{
                      alignItems: 'center',
                      display: 'inline',
                      float: 'left',
                      border: '1px solid black',
                      margin: '5px 10px 10px 0px',
              }}>

                <VideoPlayer src={videoSrc} poster={imgUrl1} width="270" height="155"  /> 
              </div>
              <h6>30/10/2020  25:37</h6>
              <p className="description">{"The recorded video's description will go on here about the topic that was covered on the date mention above and the duration of the video. The video will either play from youtube or it will be a video within the reporitory"}</p>
                   
          </div>

          </Container>
          </Row>
          <Row>
          <Container>
          <div className="App2">
                <h2>Video 2 title</h2>
                <div style={{
                      alignItems: 'right',
                      display: 'right',
                      float: 'left',
                      border: '1px solid black',
                      margin: '5px 10px 10px 0px',
              }}>
                <VideoPlayer src={videoSrc2} poster={imgUrl2} width="270" height="155" />
                
                </div>
                <p className="descript">{"this is the description of the video"}</p>
                
            </div>

            
          </Container>
          </Row>

          <Row>
          <Container>
          <div className="App3">
                <h1>Video 3 title</h1>
                <div
                style={{
                  alignItems: 'center',
                  display: 'inline',
                  float: 'left',
                  border: '1px solid black',
                  margin: '5px 10px 10px 0px',
          }}>
                <VideoPlayer src={videoSrc3} poster={imgUrl3} width="270" height="155" />
                </div>
                <p className="descript">{"this is the description of the video"}</p>
                
            </div>
            
          </Container>
          </Row>

        </Layout>
        
    )
}

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/hello.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default VideoJS;