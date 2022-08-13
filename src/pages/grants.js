import * as React from "react"
import Layout from "../components/layout";
import EcosystemVideoMov from "../videos/ecosystem-small.mp4";
import EcosystemVideo from "../videos/ecosystem-small.webm";
import EcosystemPoster from "../videos/ecosystem.png";
import {useState, useEffect} from "react";

const menu = require('../contents/urls.json');

const GrantsPage = () => {
    const [isSafari, setSafari] = useState(false)
    useEffect(() => {
        setSafari(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
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
                                    {isSafari &&
                                        <source src={EcosystemVideoMov} type='video/mp4;codecs="hvc1"'/>
                                    }
                                    {!isSafari &&
                                        <source src={EcosystemVideo} type="video/webm" />
                                    }
                                </video>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-12 col-sm-8 col-xl-5'}>
                                <h1 data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-duration="1000">Juno Grants
                                </h1>

                                <div className={'text-box'} data-sal="fade"
                                     data-sal-delay="400"
                                     data-sal-duration="1000">
                                    Apply for a grant to incentivize your development on Junø
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                        <div className={'row justify-content-center'} style={{minHeight : '1560px'}}>
                            <iframe class="clickup-embed clickup-dynamic-height" style={{background : 'none'}} src="https://forms.clickup.com/20614357/f/kn36n-108/H11M293NZ99MAXACV3"></iframe>
                            <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                            <script async src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"></script>
                        </div>
                </section>
            </Layout>
        </div>
    )
}

export default GrantsPage
