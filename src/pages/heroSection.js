import React from 'react';
import style from './heroSection.modules.css';

function heroSection(){
    return (
        
        <div className='hero-container'>
            <video src="/static/video/brain.mp4" autoPlay loop muted/>
            <h1>Njinius Tracks</h1>
            <p>Pick the one for you</p>
        </div>
    )
}

export default heroSection;