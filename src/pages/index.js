import * as React from "react"
import Layout from "../components/layout";

import HeroSection from "../sections/hero-section";
import EcosystemSection from "../sections/ecosystem-section";
import ServicesSection from "../sections/services-section";
import HackSection from "../sections/hacks-section";

const IndexPage = () => {
    return (
        <div>
            <Layout>
                <HeroSection/>
                <EcosystemSection/>
                <HackSection/>
                <ServicesSection/>

            </Layout>
        </div>
    )
}

export default IndexPage
