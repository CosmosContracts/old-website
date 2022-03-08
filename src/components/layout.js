import React from "react"
import Footer from "./footer";
import Header from "./header";
import {Helmet} from "react-helmet";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Layout({ children }) {

    return (
        <div>
            <Helmet>
                <html lang="en" />

                <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
                        integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
                        crossOrigin="anonymous" async></script>

                <meta charSet="utf-8" />
                <title>Juno - Smart Contracts Zone</title>
                <meta content="Juno is an interoperable smart contract network and a zone part of the Cosmos Network. Highly scalable, robust, secure and easy to deploy!" name="description"/>
                <meta content="Smart Contracts Zone" property="og:site_name"/>
                <meta content="https://junonetwork.io/" property="og:url"/>
                <meta content="/src/images/ogimage.png" property="og:image"/>

                <link rel="apple-touch-icon" href="/src/images/favicons/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/src/images/favicons/apple-icon-72x72.png" />

                <link rel="canonical" href="https://junonetwork.io/" />
                <meta name="theme-color" content="#312526"/>

            </Helmet>
            <Header/>
            <ParallaxProvider>
                <main>
                    {children}
                    <Footer/>
                </main>
            </ParallaxProvider>
        </div>
    )
}
