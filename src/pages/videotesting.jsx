import React from 'react';
import Layout from '@theme/Layout';
import VideoPlayer from 'react-video-js-player';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { MDBContainer} from 'mdbreact'
import Car from "../../static/video/car.mp4" 
import Var from "../../static/video/van.mp4" 
import bik from "../../static/video/bike.mp4" 

const EmbedsPage = () => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
    </div>
  )
}

export default EmbedsPage;