import React from "react";
import {Link} from "gatsby";
import EcosystemVideoMov from "../videos/ecosystem-small.mp4";
import EcosystemVideo from "../videos/ecosystem-small.webm";
import EcosystemPoster from "../videos/ecosystem.png";
import {useState, useEffect} from "react";

const menu = require('../contents/urls.json');

const EcosystemSection = () => {
    const [isSafari, setSafari] = useState(false);
    useEffect(() => {
    setSafari(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
    });
    return (
        <section className={'ecosystem-section'}>
            <div className={'container'}>
                <div className={'row align-items-center'}>
                    <div className={'col-12 col-md-6'}>
                        <div className={'video-container'}>
                            <div className={'video-wrapper'}>
                                <div id={'video-bg'}/>
                                <video id={'ecosystem-video'} autoPlay={true} preload={'none'} loop={true} playsInline={true} muted={true} poster={EcosystemPoster}>
                                    {isSafari &&
                                        <source src={EcosystemVideoMov} type='video/mp4;codecs="hvc1"'/>
                                    }
                                    {!isSafari &&
                                        <source src={EcosystemVideo} type="video/webm" />
                                    }
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className={'col-12 col-md-6'}>
                        <legend data-sal="fade"
                                data-sal-delay="400"
                                data-sal-duration="1000">ECOSYSTEM</legend>
                        <h3 data-sal="fade"
                             data-sal-delay="200"
                             data-sal-duration="1000">50+ Dapps, Contracts, Tools and 2000+ DAOs built on Juno</h3>
                        <div className={'text-box'} data-sal="fade"
                             data-sal-delay="600"
                             data-sal-duration="1000">
                            Discover a wide variety of dapps, contracts, tools and DAOs built in the Junø ecosystem by developers and contributors from across the globe
                        </div>
                        <Link to={menu.ecosystem}>
                            <div className={'link'} data-sal="fade"
                                 data-sal-delay="800"
                                 data-sal-duration="1000"><i className={'icon-arrow-right'} aria-label={'View Ecosystem'}></i> View Ecosystem</div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EcosystemSection;

