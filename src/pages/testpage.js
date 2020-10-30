import Layout from '@theme/Layout';
import React from 'react';
import HeroSection from './heroSection'
import Cardies from './cards'


function home() {
    return (
        <Layout title={'home'}>
        <HeroSection />
        <Cardies />



        </Layout>
    )
}

export default home;