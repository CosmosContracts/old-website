import React from 'react';
import './index.css';
import { ReactComponent as Logo1 } from '../../../assets/network-token.svg';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import variables from '../../../utils/variables';

const Section2 = (props) => {
    return (
        <div className="seciton2">
            <div className="section2_card">
                <div className="section2_card_head"> 500+</div>
                <div className="section2_card_data"> {variables[props.lang].contracts_deployed}</div>
            </div>
            <div className="section2_card">
                <div className="section2_card_head"> 40+</div>
                <div className="section2_card_data"> {variables[props.lang].juno_network_validators}</div>
            </div>
            <div className="section2_card">
                <div className="section2_card_head"> 20+</div>
                <div className="section2_card_data"> {variables[props.lang].juno_ecosystem_developers}</div>
            </div>
            <Logo1/>
        </div>
    );
};

Section2.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps, null)(Section2);
