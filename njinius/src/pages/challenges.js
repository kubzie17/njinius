import React from 'react';
import Layout from '@theme/Layout';

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
          Edit <code>pages/challenges.js</code> and save to reload.
          <a href={'track/'}>hello</a>
        </p>
      </div>
    </Layout>
  );
}

export default Hello;