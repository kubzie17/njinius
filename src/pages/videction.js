import React from 'react';
import Layout from '@theme/Layout';
import VideoPlayer from 'react-video-js-player';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Car from "../../static/video/car.mp4" 
import Var from "../../static/video/van.mp4" 
import bik from "../../static/video/bike.mp4" 


function VideoJS () {
    const imgUrl1 = useBaseUrl('img/undraw_docusaurus_react.svg');
    const imgUrl2 = useBaseUrl('img/undraw_docusaurus_tree.svg');
    const imgUrl3 = useBaseUrl('img/undraw_docusaurus_tree.svg');
    const videoSrc = Car;
    const videoSrc2 = Var;
    const videoSrc3 = bik;
    
    return(
        
            <div>
              
                <h1>Video 1 title</h1>
                <div style={{
                        alignItems: 'center',
                        display: 'inline',
                        float: 'left',
                        border: '1px solid black',
                        margin: '5px 10px 10px 0px',
                }}>

                  <VideoPlayer src={videoSrc} poster={imgUrl1} width="360" height="210"  /> 
                </div>
                <p className="description">{"this is the description of the video"}</p>
                     
            </div>
           
    )
}

export default VideoJS;