import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Dashboard from '../containers/Dashboard';

const Home = () => {
    return (
        <>
            <SEO title="Smart Contracts Zone"/>
            <Layout>
                <Dashboard />
            </Layout>
        </>
    );
};

export default Home;
