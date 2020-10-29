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
          Edit <code>pages/tracks.js</code> and save to reload.{"\n"}
          <Link to={useBaseUrl('business/')}>
              business         
          </Link>
          <Link to={useBaseUrl('software/')}>
              software         
          </Link>
          <Link to={useBaseUrl('book/')}>
              book club         
          </Link>

        </p>
      </div>
    </Layout>
  );
}

export default Hello;