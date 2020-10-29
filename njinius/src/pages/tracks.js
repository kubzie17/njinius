import React from 'react';
import Layout from '@theme/Layout';
import Link from 'react-router-dom';


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
          Edit <code>pages/tracks.js</code> and save to reload.{"\n"}


          <Link to="about/">about</Link>
          
          <a href={'business/'}>Business{"\n"}{"\n"}</a>
          <a href={'software/'}>Software </a>
          <a href={'book/'}>Book club</a>
        </p>
      </div>
    </Layout>
  );
}

export default Hello;