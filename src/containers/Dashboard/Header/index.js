import React from 'react';
import './index.css';
import variables from '../../../utils/variables';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import externelLink from '../../../assets/externel-link.png';

const Header = (props) => {
    const stakeDrop = () => {
        window.open('https://stakedrop.junochain.com', '_blank');
    };

    return (
        <div className="header">
            <div className="header_right1"/>
            <div className="stake_drop" onClick={stakeDrop}>
                {variables[props.lang].stakedrop}
                <img alt="link" src={externelLink} />
            </div>
            {/* <div> {variables[props.lang].developers}</div> */}
            {/* <div> {variables[props.lang].validators}</div> */}
        </div>
    );
};

Header.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default withRouter(connect(stateToProps, null)(Header));
