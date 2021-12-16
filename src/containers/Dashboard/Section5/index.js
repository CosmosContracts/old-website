import './index.css';
import React from 'react';
import q2Icon from '../../../assets/section5/Q2.svg';
import q3Icon from '../../../assets/section5/Q3.svg';
import q4Icon from '../../../assets/section5/Q4.svg';
import logo2 from '../../../assets/section5/logo2.svg';
import logo3 from '../../../assets/section5/logo3.png';
import Logo from '../../../assets/section5/logo1.svg';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import variables from '../../../utils/variables';

const Section5 = (props) => {
    return (
        <div className="section5_parent">
            <img alt="logo1" className="section5-logo1" src={Logo}/>
            <div>
                <img alt="logo2" className="section5-logo2" src={logo2}/>
                <img alt="logo3" className="section5-logo3" src={logo3}/>
            </div>
            <div className="section5">
                <div className="section5_header header_value"> {variables[props.lang].contracts_work}</div>
                <div className="">
                    <div className="section5_content">
                        <div className="section5_s1">
                            <div className="section5_s1_header">
                                {variables[props.lang].network_launch}
                            </div>
                            <div className="section5_s1_content">
                                {variables[props.lang].network_launch_content}
                            </div>
                        </div>
                        <img alt="img" src={q2Icon}/>
                    </div>
                    <div className="section5_content section5_content_reverse">
                        <div className="section5_s1">
                            <div className="section5_s1_header" style={{ marginTop: '30px' }}>
                                {variables[props.lang].ibm_contracts_work}
                            </div>
                            <div className="section5_s1_content">
                                {variables[props.lang].ibm_contracts_work_content}
                            </div>
                            <div className="section5_s1_header" style={{ marginTop: '30px' }}>
                                {variables[props.lang].gravity_dex}
                            </div>
                            <div className="section5_s1_content">
                                {variables[props.lang].gravity_dex_content}
                            </div>
                        </div>
                        <img alt="img" src={q3Icon}/>
                    </div>
                    <div className="section5_content">
                        <div className="section5_s1">

                            <div className="section5_s1_header">
                                {variables[props.lang].smart_contract_browser}
                            </div>
                            <div className="section5_s1_content">
                                {variables[props.lang].smart_contract_browser_content}
                            </div>
                        </div>
                        <img alt="img" src={q4Icon}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

Section5.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps, null)(Section5);
