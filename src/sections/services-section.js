import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import PiechartSection from "./piechart-section";

import { Parallax } from 'react-scroll-parallax';

const menu = require('../contents/urls.json');

export function ServicesSection() {
        return (
            <section className={'services-section'}>
                <div className={'section-bg'}/>
                <div className={'container'}>
                    <div className={'row'} data-masonry='{"percentPosition": true }'>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service cosmostation'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Cosmostation Wallet</div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href={menu.cosmostation} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Install Cosmostation</button>
                                            </a>
                                        </div>
                                        <div className={'col-auto'}>
                                            <a href={menu['cosmostation-use']} target={'_blank'} rel={'noreferrer'}>
                                                <div className={'link'}><i className={'icon-arrow-right'}></i>How to use it?</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service staking-juno'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Staking Juno</div>
                                    <div className={'text-box'}>
                                        Junø is a proof-of-stake blockchain which allows users to stake their funds, as staking rewards are distributed to stakers every block. At any time, stakers can claim their accumulated rewards via their wallet.
                                        <ul>
                                            <li>Secure the Network</li>
                                            <li>Earn Staking Rewards</li>
                                            <li>Govern the Network</li>
                                        </ul>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href={menu['staking-juno']} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Learn more</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service keplr-wallet'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Keplr wallet</div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href={menu.keplr} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Install Keplr Wallet</button>
                                            </a>
                                        </div>
                                        <div className={'col-auto'}>
                                            <a href={menu['keplr-use']} target={'_blank'} rel={'noreferrer'}>
                                                <div className={'link'}><i className={'icon-arrow-right'}></i>How to use it?</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'row pt-md-5 align-items-center'}>
                        <div className={'col-12 col-md-6 pe-md-5'}>
                            <Parallax translateY={['100px', '0px']}>
                                    <StaticImage
                                        src={'../images/junoswap.png'}
                                        alt={'Smart Contracts'}
                                        width={827}
                                        height={781}
                                        placeholder="blurred"
                                    />
                            </Parallax>
                        </div>
                        <div className={'col-12 col-md-12 col-lg-5 pe-lg-4 z-index-front'}>
                            <h3
                                data-sal="fade"
                                data-sal-delay="200"
                                data-sal-duration="1000">
                                Easy access to Decentralized Exchanges
                            </h3>
                            <div className={'text-box pe-5'}
                                 data-sal="fade"
                                 data-sal-delay="400"
                                 data-sal-duration="1000">
                                Swap & LP your Juno on various Interchain DEXs.
                            </div>
                            <div className={'row mt-4'}
                                 data-sal="fade"
                                 data-sal-delay="600"
                                 data-sal-duration="1000">
                                <div className={'col-5 pb-3'}>
                                    <a href={menu.osmosis} target={'_blank'} rel={'noreferrer'}>
                                        <button type={'button'}>Enter Osmosis</button>
                                    </a>
                                </div>
                                <div className={'col-5 pb-3'}>
                                    <a href={menu.wynd} target={'_blank'} rel={'noreferrer'}>
                                        <button type={'button'}>Enter Wynd</button>
                                    </a>
                                </div>
                                <div className={'col-5 pb-3'}>
                                    <a href={menu.loopmarkets} target={'_blank'} rel={'noreferrer'}>
                                        <button type={'button'}>Enter Loop</button>
                                    </a>
                                </div>
                                <div className={'col-5 pb-3'}>
                                    <a href={menu.hopers} target={'_blank'} rel={'noreferrer'}>
                                        <button type={'button'}>Enter Hopers</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <PiechartSection/>

                </div>
            </section>
        );
}

export default ServicesSection;
