import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import { EcosystemProvider } from '../../containers/Ecosystem/Ecosystem.provider';
import Ecosystem from '../../containers/Ecosystem';

const EcosystemPage = () => {
    return (
        <>
            <SEO title="Ecosystem" />
            <Layout>
                <EcosystemProvider>
                    <Ecosystem />
                </EcosystemProvider>
            </Layout>
        </>
    );
};

export default EcosystemPage;
