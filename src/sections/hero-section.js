import React from "react";
import {Link} from "gatsby";
import HeroVideoMov from "../videos/hero.mp4";
import HeroVideo from "../videos/hero.webm";
import HeroVideoPoster from "../videos/hero.png"
import {useState, useEffect} from "react";

const menu = require('../contents/urls.json');

const HeroSection = () => {
    const [isSafari, setSafari] = useState(false);
    useEffect(() => {
    setSafari(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
    });
    return (
        <section className={'hero-section'}>
            <div className={'video-container'}>
                <div className={'video-wrapper'}>
                    <div className={'video-bg'}/>
                    <video id={'hero-video'} autoPlay={true} preload={'none'} loop={true} playsInline={true} muted={true} poster={HeroVideoPoster}>
                        {isSafari &&
                            <source src={HeroVideoMov} type='video/mp4;codecs="hvc1"'/>
                        }
                        {!isSafari &&
                            <source src={HeroVideo} type="video/webm" />
                        }
                    </video>
                </div>
            </div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-12 col-xl-6'}>
                        <h1 data-sal="fade"
                            data-sal-delay="200"
                            data-sal-duration="1000">The<br/>
                            Interchain<br/>
                            Incubator
                        </h1>

                        <div className={'text-box'} data-sal="fade"
                             data-sal-delay="400"
                             data-sal-duration="1000">
                            Use & create interoperable applications on Junø. <br/>
                            A decentralized, public, permission-less network for cross-chain smart contracts.
                        </div>

                        <div className={'row'} data-sal="fade"
                             data-sal-delay="600"
                             data-sal-duration="1000">
                            <div className={'col-auto'}>
                                <a href={menu["get-started"]} target={'_blank'} rel={'noreferrer'}>
                                    <button type={'button'}>Get Started</button>
                                </a>
                            </div>
                            <div className={'col-auto'}>
                                <Link to={menu.ecosystem}>
                                    <div className={'link'}><i className={'icon-arrow-right'}></i> Ecosystem </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
