import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
          <Link to={useBaseUrl("book/")}>
              books         
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default Hello;