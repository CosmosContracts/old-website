import React from 'react';
import './index.css';
import { Button } from '@material-ui/core';
import junoIcon from '../../../assets/juno.svg';
import logo1 from '../../../assets/section1/logo1.png';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import variables from '../../../utils/variables';

const Section1 = (props) => {
    return (
        <div className="section1">
            <span className="section1_left1"/>
            <div className="section1_head1">
                <img alt="logo" src={junoIcon}/>
            </div>
            <div className="section1_head2">
                {variables[props.lang].smart_contracts_evolved}
                <span className="section1_right1"/>
            </div>
            <div className="section1_cont">
                <span>
                    {variables[props.lang].section1_content}
                </span>
            </div>
            <div className="section1_actions">
                <Button className="get_started_button">
                    {variables[props.lang].get_started}
                </Button>
                <Button className="view_github_button">
                    {variables[props.lang].view_on_github}
                </Button>
            </div>
            <span className="section1_left2"/>
            <img alt="logo1" className="section1-logo1" src={logo1}/>
        </div>
    );
};

Section1.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps, null)(Section1);
