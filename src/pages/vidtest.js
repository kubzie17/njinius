import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import VideoPlayer from 'react-video-js-player';
import styles from './styles.module.css';
import Car from "../../static/video/car.mp4" 
import Var from "../../static/video/van.mp4" 
import bik from "../../static/video/bike.mp4" 


const features = [
    {
      title: 'Darrel Barreto White',
      imageUrl: Car,
      posterUrl: 'img/undraw_docusaurus_react.svg',
      description: (
        <>
          breif summary about Darrel
        </>
      ),
    },
    {
      title: 'Elvin Barreto White',
      imageUrl: Var,
      posterUrl: 'img/undraw_docusaurus_tree.svg',
      description: (
        <>
          breif summary about Elvin
        </>
      ),
    },
    {
      title: 'Banzi Kubheka',
      imageUrl: bik,
      posterUrl:'img/undraw_docusaurus_tree.svg',
      description: (
        <>
          breif summary about Banzi
        </>
      ),
    },
];


function Feature({imageUrl, posterUrl, title, description}) {
const imgUrl = imageUrl;
const psterUrl = posterUrl;
return (
    <div className={clsx('col col-2', styles.feature,)}>
    {imgUrl && (
        <div className="text--center">
          
          <VideoPlayer src={imgUrl} poster={psterUrl} widht="360" height="210"/>
        </div>
    )}
    <h3>{title}</h3>
    <p>{description}</p>
    </div>
);
}

function About() {
  return (
    <Layout title="About">
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
            {features && features.length > 0 && (
            <section className={styles.features}>
                <div className="container">
                <div className="row">
                    {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                    ))}
                </div>
                </div>
            </section>
        )}
        </main>
      
    </Layout>
  );
}

export default About;