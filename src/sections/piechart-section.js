import React from "react";
import PiechartVideoMov from "../videos/piechart.mp4";
import PiechartVideo from "../videos/piechart.webm";
import PiechartPoster from "../videos/piechart.png"

class PiechartSection extends React.Component {
    render() {
        return (
            <div className={'row piechart'}>
                <div className={'col-12 col-md-7 pe-md-5'}>
                    <div className={'video-container'}>
                        <div className={'video-wrapper'}>
                            <div className={'chart-text'}>
                                <div className={'text text1'}
                                     data-sal="slide-up"
                                     data-sal-delay="900"
                                     data-sal-duration="1000"
                                     data-sal-easing="ease">
                                    Community Stakedrop:
                                    <span>30.663.193 $JUNO</span>
                                </div>
                                <div className={'text text2'}
                                     data-sal="slide-up"
                                     data-sal-delay="700"
                                     data-sal-duration="1000"
                                     data-sal-easing="ease">
                                    Core Development Reserve:
                                    <em>(Vested over 12 years, i.e. non-circulating):</em>
                                    <span>10.084.396 $JUNO</span>
                                </div>
                                <div className={'text text3'}
                                     data-sal="slide-up"
                                     data-sal-delay="1100"
                                     data-sal-duration="1000"
                                     data-sal-easing="ease">
                                    Community Pool:
                                    <span>20.000.000 $JUNO</span>
                                </div>
                                <div className={'text text4'}
                                     data-sal="slide-down"
                                     data-sal-delay="900"
                                     data-sal-duration="1000"
                                     data-sal-easing="ease">
                                    Smart Contract Challenges:
                                    <span>2.373.341 $JUNO</span>
                                </div>
                                <div className={'text text5'}
                                     data-sal="slide-down"
                                     data-sal-delay="1000"
                                     data-sal-duration="1000"
                                     data-sal-easing="ease">
                                    Core Team:
                                    <em>(Vested over 12 years, i.e. non-circulating):</em>
                                    <span>1.782.312 $JUNO</span>
                                </div>
                            </div>
                            <video autoPlay={true} loop={false} playsInline={true} muted={true} poster={PiechartPoster}>
                                <source src={PiechartVideoMov} type='video/mp4;codecs="hvc1"'/>
                                <source src={PiechartVideo} type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className={'col-12 col-md-5 pt-5 pt-md-0'}>
                    <h3
                        data-sal="fade"
                        data-sal-delay="200"
                        data-sal-duration="1000">Token Economics</h3>
                    <div className={'text-box'}
                         data-sal="fade"
                         data-sal-delay="400"
                         data-sal-duration="1000">
                        <p>Juno is a completely community owned and operated smart contract platform.</p>
                        <p>The majority of the genesis supply was stakedropped to atom holders, committed to the locked community pool, and allocated to the vested development reserve & smart contract Hacks.</p>
                    </div>

                    <div className={'black-box'}
                         data-sal="fade"
                         data-sal-delay="600"
                         data-sal-duration="1000">
                        <ul>
                            <li>No seed sale, no private sale, no public sale</li>
                            <li>Fairdrop / Stakedrop Genesis launch</li>
                            <li>Whalecap at 50k ATOM per address</li>
                            <li>Genesis supply to 46.000 unique atom stakers</li>
                            <li>Exchange validator exclusion</li>
                            <li>Exchange delegator exclusion</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default PiechartSection;
