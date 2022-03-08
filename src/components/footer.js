import React from "react";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import FooterVideoMov from "../videos/footer.mp4";
import FooterVideo from "../videos/footer.webm";

const menu = require('../contents/urls.json')

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className={'video-container'}>
                    <div className={'video-wrapper'}>
                        <div className={'video-bg'}/>
                        <video autoPlay={true} loop={true} preload={'none'} playsInline={true} muted={true}>
                            <source src={FooterVideoMov} type='video/mp4;codecs="hvc1"'/>
                            <source src={FooterVideo} type="video/webm" />
                        </video>
                    </div>
                </div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-12 col-sm-8'}>
                            <h2>Get more out <br/> of Juno</h2>

                            <div className={'row mt-4 mt-lg-5'}>
                                <div className={'col-12 col-sm-6 col-md-2 pb-4'}>
                                    <legend>Build</legend>

                                    <ul>
                                        <li><a href={menu.docs} target={'_blank'} rel={'noreferrer'}>Docs</a></li>
                                        <li><a href={menu.github} target={'_blank'} rel={'noreferrer'}>Github</a></li>
                                        <li><Link to={menu.ecosystem}>Ecosystem</Link></li>
                                    </ul>
                                </div>
                                <div className={'col-12 col-sm-6 col-md-3 pb-4'}>
                                    <legend>Community</legend>

                                    <ul>
                                        <li><a href={menu.github} target={'_blank'} rel={'noreferrer'}>Github</a></li>
                                        <li><a href={menu.discord} target={'_blank'} rel={'noreferrer'}>Chat on Discord</a></li>
                                        <li><a href={menu.telegram} target={'_blank'} rel={'noreferrer'}>Telegram</a></li>
                                        <li><a href={menu.twitter} target={'_blank'} rel={'noreferrer'}>Twitter</a></li>
                                        <li><a href={menu.blog} target={'_blank'} rel={'noreferrer'}>Blog</a></li>
                                    </ul>
                                </div>
                                <div className={'col-12 col-sm-6 col-md-3 pb-4'}>
                                    <legend>Ecosystem</legend>

                                    <ul>
                                        <li><Link to={menu.ecosystem+'#dapp'} state={{category:'dapp'}} target={'_blank'} rel={'noreferrer'}>Dapp</Link></li>
                                        <li><Link to={menu.ecosystem+'#tools'} state={{category:'tools'}} target={'_blank'} rel={'noreferrer'}>Tools</Link></li>
                                        <li><Link to={menu.ecosystem+'#contracts'} state={{category:'contracts'}} target={'_blank'} rel={'noreferrer'}>Contracts</Link></li>
                                    </ul>
                                </div>
                                <div className={'col-12 col-sm-6 col-md-4 pb-4'}>
                                    <legend>Network Data & Trackers</legend>

                                    <ul>
                                        <li><a href={menu.coingecko} target={'_blank'} rel={'noreferrer'}>Coingecko</a></li>
                                        <li><a href={menu.explorer1} target={'_blank'} rel={'noreferrer'}>Explorer 1</a></li>
                                        <li><a href={menu.explorer2} target={'_blank'} rel={'noreferrer'}>Explorer 2</a></li>
                                        <li><a href={menu['contract-data']} target={'_blank'} rel={'noreferrer'}>Contract data</a></li>
                                        <li><a href={menu['osmosis-dex']} target={'_blank'} rel={'noreferrer'}>Osmosis DEX data</a></li>
                                        <li><a href={menu.onchain1} target={'_blank'} rel={'noreferrer'}>On-chain data</a></li>
                                        <li><a href={menu.onchain2} target={'_blank'} rel={'noreferrer'}>On-chain data 2</a></li>
                                        <li><a href={menu.coinmarketcap} target={'_blank'} rel={'noreferrer'}>Coinmarketcap</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'black-box'}>
                        <div className={'row justify-content-between align-items-center'}>
                            <div className={'col-12 col-md-auto pb-3 pb-md-0'}>
                                <div className={'title'}>Meet the global social community:</div>
                            </div>
                            <div className={'col-12 col-md-auto'}>
                                <div className={'social'}>
                                    <div className={'row justify-content-center justify-content-mb-end'}>
                                        <div className={'col-auto'}>
                                            <a href={menu.twitter} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-twitter'} aria-label={'Twitter'}></i></a>
                                            <a href={menu.github} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-github'} aria-label={'Github'}></i></a>
                                            <a href={menu.discord} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-discord'} aria-label={'Discord'}></i></a>
                                            <a href={menu.telegram} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-telegram'} aria-label={'Telegram'}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'copyright'}>
                        <div className={'row align-items-center justify-content-center'}>
                            <div className={'col-auto'}>Website created by</div>
                            <div className={'col-auto px-0'}>
                                <a href="https://designatives.com" target={'_blank'} rel={'noreferrer'}>
                                    <StaticImage
                                        src={'../images/designatives-logo.svg'}
                                        alt={'Designatives'}
                                        width={100}
                                        height={18}
                                        placeholder="blurred"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
