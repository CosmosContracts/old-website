import React from 'react';
import './index.css';
import logo1 from '../../../assets/section3/logo1.png';
import logoIcon from '../../../assets/section3/logo2.png';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import variables from '../../../utils/variables';

const Section3 = (props) => {
    return (
        <div className="section3">
            <div className="section3_left">
                <div className="section3_left_head header">
                    {variables[props.lang]['interoperable_smart_contracts']}
                </div>
                <img alt="logo" src={logoIcon}/>
                <div className="section3_left_cont">
                    {variables[props.lang].interoperable_smart_contracts_section1}
                    <br/><br/>
                    {variables[props.lang].interoperable_smart_contracts_section2}
                    <br/><br/>
                    {variables[props.lang].interoperable_smart_contracts_section3}
                </div>
            </div>
            <div className="section3_right">
                {/* <img alt="logo" src={logoIcon}/> */}
                <img alt="logo1" className="section3-logo" src={logo1}/>
            </div>
        </div>
    );
};

Section3.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps, null)(Section3);
