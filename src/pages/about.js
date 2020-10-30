import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const features = [
    {
      title: 'Darrel Barreto White',
      imageUrl: 'img/undraw_docusaurus_mountain.svg',
      description: (
        <>
          breif summary about Darrel
        </>
      ),
    },
    {
      title: 'Elvin Barreto White',
      imageUrl: 'img/undraw_docusaurus_tree.svg',
      description: (
        <>
          breif summary about Elvin
        </>
      ),
    },
    {
      title: 'Banzi Kubheka',
      imageUrl: 'img/undraw_docusaurus_react.svg',
      description: (
        <>
          breif summary about Banzi
        </>
      ),
    },
    {
        title: 'Tinashe Chtakasha',
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
          <>
            breif summary about Darrel Tinashe
          </>
        ),
      },
];


function Feature({imageUrl, title, description}) {
const imgUrl = useBaseUrl(imageUrl);
return (
    <div className={clsx('col col-5', styles.feature,)}>
    {imgUrl && (
        <div className="text--center">
        <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
    )}
    <h3>{title}</h3>
    <p>{description}</p>
    </div>
);
}

function About() {
    const context = useDocusaurusContext();
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