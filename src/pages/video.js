import React from 'react';
import Layout from '@theme/Layout';
import VideoPlayer from 'react-video-js-player';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Car from "../../static/video/car.mp4" 
import Var from "../../static/video/van.mp4" 
import bik from "../../static/video/bike.mp4" 


const VideoJS = () => {
    const imgUrl1 = useBaseUrl('img/undraw_docusaurus_react.svg');
    const imgUrl2 = useBaseUrl('img/undraw_docusaurus_tree.svg');
    const imgUrl3 = useBaseUrl('img/undraw_docusaurus_tree.svg');
    const videoSrc = Car;
    const videoSrc2 = Var;
    const videoSrc3 = bik;
    
    return(
        <Layout title = "VideoJs">
            <header >
                <div
                style={{
                    // display: 'flex',
                    textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <h1 className="tilte">{'Njinius'} </h1>
                        <p className="subtitle">{"description about the njinius and how it cam about and the founders"}</p>
                </div>
            </header>
            <main>

            <div className="App">
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

            <div className="App2">
                <h1>Video 2 title</h1>
                <div style={{
                        alignItems: 'center',
                        display: 'below',
                        float: 'left',
                        border: '1px solid black',
                        margin: '5px 10px 10px 0px',
                }}>
                <VideoPlayer src={videoSrc2} poster={imgUrl2} width="360" height="210"/>
                
                </div>
                <p className="descript">{"this is the description of the video"}</p>
                
            </div>

            <div className="App3">
                <h1>Video 3 title</h1>
                <div style={{
                        display: 'inline',
                        float: 'left',
                        border: '1px solid black',
                        margin: '5px 10px 10px 0px',
                }}>
                <VideoPlayer src={videoSrc3} poster={imgUrl3} width="360" height="210"/>
                
                </div>
                <p className="descript">{"this is the description of the video"}</p>
                
            </div>
            
            </main>
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