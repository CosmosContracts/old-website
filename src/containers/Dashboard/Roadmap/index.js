import React from 'react';
import variables from '../../../utils/variables';
import './index.css';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Roadmap = (props) => {
    return (
        <section className="roadmap" id="roadmap">
            <div className="heading">
                <h2>{variables[props.lang].roadmap}</h2>
            </div>
            <div className="map">
                <div className="info_block">
                    <div className="dots_section">
                        <span className="dot1"> </span>
                        <span/>
                        <span className="dot2"> </span>
                    </div>
                    <div className="info">
                        <div className="info_text link_class">
                            <p className="heading_text">
                                {variables[props.lang]['roadmap_heading1']}
                            </p>
                            <a
                                href="https://tinyurl.com/m5w9pzpd"
                                rel="noopener noreferrer" target="_blank" >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="info_block reverse">
                    <div className="dots_section">
                        <span className="dot1"> </span>
                        <span/>
                        <span className="dot2"> </span>
                    </div>
                    <div className="info">
                        <div className="info_text">
                            <p className="heading_text">{variables[props.lang]['roadmap_heading2']}</p>
                            <p className="sub_text">{variables[props.lang]['roadmap_text2']}</p>
                        </div>
                    </div>
                </div>
                <div className="info_block">
                    <div className="dots_section">
                        <span className="dot1"> </span>
                        <span/>
                        <span className="dot2"> </span>
                    </div>
                    <div className="info">
                        <div className="info_text link_class">
                            <p className="heading_text">
                                {variables[props.lang]['roadmap_heading3']}
                            </p>
                            <a
                                href="https://emeris.com/"
                                rel="noopener noreferrer" target="_blank" >
                                Website
                            </a>
                        </div>
                    </div>
                </div>
                <div className="info_block reverse">
                    <div className="dots_section">
                        <span className="dot1"> </span>
                        <span/>
                        <span className="dot2"> </span>
                    </div>
                    <div className="info">
                        <div className="info_text link_class">
                            <p className="heading_text">{variables[props.lang]['roadmap_heading4']}</p>
                            <p className="sub_text">
                                {variables[props.lang]['roadmap_text4']}
                            </p>
                            <a
                                href="https://www.gravitydex.io"
                                rel="noopener noreferrer" target="_blank">
                                Website
                            </a>
                        </div>
                    </div>
                </div>
                <div className="info_block">
                    <div className="dots_section">
                        <span className="dot1"> </span>
                        <span/>
                        <span className="dot2"> </span>
                    </div>
                    <div className="info">
                        <div className="info_text">
                            <p className="heading_text">{variables[props.lang]['roadmap_heading5']}</p>
                        </div>
                    </div>
                </div>
                <div className="info_block reverse">
                    <div className="dots_section">
                        <span className="dot1"> </span>
                        <span/>
                        <span className="dot2"> </span>
                    </div>
                    <div className="info">
                        <div className="info_text">
                            <p className="heading_text">{variables[props.lang]['roadmap_heading6']}</p>
                            <p className="sub_text">{variables[props.lang]['roadmap_text6']}</p>
                        </div>
                    </div>
                </div>
                <div className="info_block">
                    <div className="dots_section">
                        <span className="dot1"> </span>
                        <span/>
                        <span className="dot2"> </span>
                    </div>
                    <div className="info">
                        <div className="info_text">
                            <p className="heading_text">{variables[props.lang]['roadmap_heading7']}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Roadmap.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps, null)(Roadmap);
