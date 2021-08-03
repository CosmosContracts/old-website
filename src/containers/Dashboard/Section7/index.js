import React from 'react';
import { Button } from '@material-ui/core';
import './index.css';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import variables from '../../../utils/variables';

const Section7 = (props) => {
    return (
        <div className="section7">
            <div className="section7_header"> {variables[props.lang].want_juno_network}</div>
            <span className="section7_logo1"/>
            <Button className="dev_discord common_button"> {variables[props.lang].dev_discord} </Button>
            <span className="section7_logo2"/>
        </div>
    );
};

Section7.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps, null)(Section7);
