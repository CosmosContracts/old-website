import React from 'react';
import './index.css';
import { navigate } from 'gatsby';
import { Button } from '@material-ui/core';
import junoIcon from '../../../assets/juno.svg';
import logo1 from '../../../assets/section1/logo1.png';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import variables from '../../../utils/variables';
import junoBlackIcon from '../../../assets/junodark.svg';

const Section1 = (props) => {
    return (
        <div className="section1">
            <span className="section1_left1"/>
            <img alt="logo" className="section1_left1_logo" src={junoBlackIcon} />
            <div className="section1_head1">
                <img alt="logo" src={junoIcon}/>
            </div>
            <div className="section1_head2">
                {variables[props.lang].smart_contracts_evolved}
                <span className="section1_right1"/>
                <img alt="logo" className="section1_right1_logo" src={junoBlackIcon} />
            </div>
            <div className="section1_cont">
                <span>
                    {variables[props.lang].section1_content}
                </span>
            </div>
            <div className="section1_actions">
                <Button className="get_started_button" onClick={() => window.open('https://docs.junochain.com/', '_blank')}>
                    {variables[props.lang].get_started}
                </Button>
                <Button className="get_started_button" onClick={() => navigate('/ecosystem')}>
                    {variables[props.lang].ecosystem}
                </Button>
            </div>
            <img alt="logo" className="section1_left2_logo" src={junoBlackIcon} />
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
