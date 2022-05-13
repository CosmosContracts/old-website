import * as React from "react"
import {AnchorLink} from "gatsby-plugin-anchor-links";
import Layout from "../components/layout";
import Ecosystem from "../components/ecosystem";
import EcosystemVideoMov from "../videos/ecosystem.mp4";
import EcosystemVideo from "../videos/ecosystem.webm";
import EcosystemPoster from "../videos/ecosystem.png";
import {useEffect} from "react";

const menu = require('../contents/urls.json');
const ecosystems = require('../contents/ecosystems.json');
const daos = require('../contents/daos.json');

function toggleNav(){
    document.getElementById('filter-nav').classList.toggle('opened');
}

function loadTab(props){
    const currentCategory = props.location.hash ? props.location.hash.substring(1) : 'all';
    document.getElementById('nav-'+currentCategory+'-tab').click();
}

const EcosystemPage = (props) => {
    useEffect(() => {
        loadTab(props);
        document.getElementById('filter-nav').classList.remove('opened');
        window.scrollTo(0,0)
    });
    return (
        <div className={'ecosystem-page'}>
            <Layout>
                <section className={'hero-section'}>
                    <div className={'container'}>
                        <div className={'video-container'}>
                            <div className={'video-wrapper'}>
                                <div className={'video-bg'}/>
                                <video autoPlay={true} loop={true} preload={'none'} playsInline={true} muted={true} poster={EcosystemPoster}>
                                    <source src={EcosystemVideoMov} type='video/mp4;codecs="hvc1"'/>
                                    <source src={EcosystemVideo} type="video/webm" />
                                </video>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-12 col-sm-8 col-xl-10'}>
                                <h1 data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-duration="1000">The Juno Ecosystem
                                </h1>

                                <div className={'text-box'} data-sal="fade"
                                     data-sal-delay="400"
                                     data-sal-duration="1000">
                                    50+ apps, contracts, tools and 2000+ DAO's built on Juno
                                </div>

                                <div className={'row'} data-sal="fade"
                                     data-sal-delay="600"
                                     data-sal-duration="1000">
                                    <div className={'col-auto'}>
                                        <AnchorLink to={'/ecosystem/#browse'}>
                                            <button type={'button'}>Start browsing</button>
                                        </AnchorLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id={'browse'} className={'search-section mt-4 mt-lg-5'}>
                    <div className={'container'}>
                        <div className={'row justify-content-between'}>
                            <div className={'col-auto'}>
                                <h5 className={'mb-3 mb-lg-4 mb-xl-5'}
                                    data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-duration="1000">Browse Juno ecosystem
                                </h5>
                            </div>
                            <div className={'col-12 col-md-auto'}>
                                <nav>
                                    <div className="nav nav-tabs" id="filter-nav" role="tablist">
                                        <button className="nav-link active" id="nav-all-tab"
                                                onClick={()=>toggleNav()}
                                                data-bs-toggle="tab" data-bs-target="#nav-all" type="button"
                                                role="tab" aria-controls="nav-all" aria-selected="true">All
                                        </button>
                                        <button className="nav-link" id="nav-dapp-tab"
                                                onClick={()=>toggleNav()}
                                                data-bs-toggle="tab" data-bs-target="#nav-dapp" type="button"
                                                role="tab" aria-controls="nav-dapp" aria-selected="true">Dapp
                                        </button>
                                        <button className="nav-link" id="nav-contracts-tab" data-bs-toggle="tab"
                                                onClick={()=>toggleNav()}
                                                data-bs-target="#nav-contracts" type="button" role="tab"
                                                aria-controls="nav-contracts" aria-selected="false">Contracts
                                        </button>
                                        <button className="nav-link" id="nav-tools-tab" data-bs-toggle="tab"
                                                onClick={()=>toggleNav()}
                                                data-bs-target="#nav-tools" type="button" role="tab"
                                                aria-controls="nav-tools" aria-selected="false">Tools
                                        </button>
                                        <button className="nav-link" id="nav-dao-tab" data-bs-toggle="tab"
                                                onClick={()=>toggleNav()}
                                                data-bs-target="#nav-dao" type="button" role="tab"
                                                aria-controls="nav-dao" aria-selected="false">Dao
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>


                        <div className="tab-content pt-3" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-all" role="tabpanel"
                                 aria-labelledby="nav-all-tab">
                                <div className={'row'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>Featured</h6>
                                    </div>
                                    {ecosystems.map((ecosystem, index) => {
                                        return (
                                            ecosystem.featured && (<div key={index} className={'col-12 col-sm-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem}/>
                                            </div>)
                                        )
                                    })}
                                </div>
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>All DAPPS, Contracts, Tools</h6>
                                    </div>
                                </div>

                                <div className={'row'}>
                                    {ecosystems.map((ecosystem, index) => {
                                        return (
                                            !ecosystem.featured && (<div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem}/>
                                            </div>)
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-dapp" role="tabpanel"
                                 aria-labelledby="nav-dapp-tab">
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>DAPPS</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {ecosystems.map((ecosystem,index) => {
                                        return (
                                            ecosystem.category === 'Dapp' && (<div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem}/>
                                            </div>)
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-contracts" role="tabpanel"
                                 aria-labelledby="nav-contracts-tab">
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>Contracts</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {ecosystems.map((ecosystem,index) => {
                                        return (
                                            ecosystem.category === 'Contracts' && (<div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem}/>
                                            </div>)
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-tools" role="tabpanel"
                                 aria-labelledby="nav-tools-tab">
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>Tools</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {ecosystems.map((ecosystem,index) => {
                                        return (
                                            ecosystem.category === 'Tools' && (<div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem}/>
                                            </div>)
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-dao" role="tabpanel"
                                 aria-labelledby="nav-dao-tab">
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>DAOs</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {daos.map((dao,index) => {
                                        return (
                                            <div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={dao}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default EcosystemPage
