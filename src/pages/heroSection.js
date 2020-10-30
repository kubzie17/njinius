import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import style from './heroSection.modules.css';



function heroSection(){
    return (
        
        <div className='hero-container'>
            
            <img src={useBaseUrl('img/undraw_docusaurus_react.svg')}/>
            <h1>Njinius Tracks</h1>
            <p>Pick the one for you</p>
        </div>
    )
}



export default heroSection;