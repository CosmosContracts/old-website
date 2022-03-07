import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {Parallax} from "react-scroll-parallax";

const menu = require('../contents/urls.json');

class HackSection extends React.Component {

    render() {
        return (
            <section className={'hacks-section'}>
                <div className={'bg'}/>
                <div className={'container'}>
                    <div className={'row align-items-center mb-5'}>
                        <div className={'col-12 col-md-6 pe-md-5'}>
                            <h3 className={'mb-4'}
                                data-sal="fade"
                                data-sal-delay="200"
                                data-sal-duration="1000">
                                Hacks and <br/>
                                Bounties</h3>
                            <div className={'text-box'}
                                 data-sal="fade"
                                 data-sal-delay="400"
                                 data-sal-duration="1000">
                                <p>
                                    The Moneta Hacks are the largest incentivised smart contract challenges in the world.
                                </p>
                                <p>
                                    Developers from across the world may deploy smart contracts onto the permission-less interoperable smart contract base layer called Juno.
                                </p>
                            </div>
                            <a href={menu["hacks-and-bounties"]} target={'_blank'} rel={'noreferrer'}>
                                <div className={'link'} data-sal="fade"
                                     data-sal-delay="600"
                                     data-sal-duration="1000"><i className={'icon-arrow-right'}></i> Learn more</div>
                            </a>
                        </div>
                        <div className={'col-12 col-md-6 pt-5 pt-md-0 ps-md-5'}>
                            <div className={'row'}>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'bounty first'}>
                                        <div className={'image'}>
                                            <StaticImage
                                                src={'../images/decentralized-finance.png'}
                                                alt={'Decentralized Finance'}
                                                width={218}
                                                height={96}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Decentralized Finance</div>
                                        <div className={'text-box'}>
                                            AMM/DEX, Lending/Borrowing, Derivatives/Super Fluid Staking etc.
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'bounty'}>
                                        <div className={'image'}>
                                            <StaticImage
                                                src={'../images/gaming.png'}
                                                alt={'Gaming/Gamification'}
                                                width={96}
                                                height={97}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Gaming/Gamification</div>
                                        <div className={'text-box'}>
                                            Metaverse - Creation of digital worlds, games and gamification
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'bounty'}>
                                        <div className={'image'}>
                                            <StaticImage
                                                src={'../images/non-fungible-tokens.png'}
                                                alt={'Non Fungible Tokens'}
                                                width={96}
                                                height={96}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Non Fungible Tokens</div>
                                        <div className={'text-box'}>
                                            Marketplaces, Inter NFT applications & inter-nft standard improvements.
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'bounty'}>
                                        <div className={'image'}>
                                            <StaticImage
                                                src={'../images/privacy.png'}
                                                alt={'Privacy'}
                                                width={96}
                                                height={96}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Privacy</div>
                                        <div className={'text-box'}>
                                            Privacy preserving protocols on Juno
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'row pt-md-5 align-items-top'}>
                        <div className={'col-12 col-md-6 pe-md-5'}>
                            <Parallax translateY={['20%', '0%']}>
                                <StaticImage
                                    src={'../images/cosmwasm.png'}
                                    alt={'Interoperable Smart Contracts - Home of CosmWasm'}
                                    width={612}
                                    height={570}
                                    placeholder="blurred"
                                />
                            </Parallax>
                        </div>
                        <div className={'col-12 col-md-6'}>
                            <legend
                                data-sal="fade"
                                data-sal-delay="100"
                                data-sal-duration="1000">COSMWASM</legend>
                            <h3 className={'mb-4'}
                                data-sal="fade"
                                data-sal-delay="200"
                                data-sal-duration="1000">Interoperable Smart Contracts - Home of CosmWasm</h3>
                            <div className={'text-box'}
                                 data-sal="fade"
                                 data-sal-delay="400"
                                 data-sal-duration="1000">
                                Simple, secure and fast virtual machine set up to sandbox or partition your application’s actions for better testing, security, performance and speed.
                            </div>

                            <a href={menu["cosmwasm"]} target={'_blank'} rel={'noreferrer'}>
                                <div className={'link'}
                                     data-sal="fade"
                                     data-sal-delay="600"
                                     data-sal-duration="1000"><i className={'icon-arrow-right'}></i> Learn more</div>
                            </a>

                            <div className={'row mt-4'}>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'feature'}>
                                        <div className={'image ms-md-n5 mb-2'}>
                                            <StaticImage
                                                src={'../images/speed.png'}
                                                alt={'Speed'}
                                                width={158}
                                                height={177}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Speed</div>
                                        <div className={'text-box'}>Utilizing the Cosmos SDK & Tendermint Consensus to ensure high throughput and fast contract execution</div>
                                    </div>
                                </div>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'feature align-top'}>
                                        <div className={'image mb-4 ms-md-n4'}>
                                            <StaticImage
                                                src={'../images/cost.png'}
                                                alt={'Cost'}
                                                width={154}
                                                height={178}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Cost</div>
                                        <div className={'text-box'}>Low cost deployment up to 35000 times cheaper than gen 2 blockchain networks</div>
                                    </div>
                                </div>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'feature'}>
                                        <div className={'image mb-4 ms-md-n3'}>
                                            <StaticImage
                                                src={'../images/interoperability.png'}
                                                alt={'Interoperability'}
                                                width={176}
                                                height={180}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Interoperability</div>
                                        <div className={'text-box'}>Deployment on Juno and interoperable with all networks in the cosmos ecosystem via IBC</div>
                                    </div>
                                </div>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'feature align-top'}>
                                        <div className={'image mb-5 ms-md-n2'}>
                                            <StaticImage
                                                src={'../images/smart-contracts.png'}
                                                alt={'Smart Contracts'}
                                                width={186}
                                                height={159}
                                                placeholder="blurred"

                                            />
                                        </div>
                                        <div className={'title'}>Smart Contracts</div>
                                        <div className={'text-box'}>Code & deploy your contracts in multiple languages via the powerful CosmWasm Contract framework</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HackSection;
