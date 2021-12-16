import React from 'react';
import './index.css';
import variables from '../../../utils/variables';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import externelLink from '../../../assets/externel-link.png';
import ExpansionButton from '../ExpansionButton';
import { showNavBar } from '../../../actions/navBar';
import junoBlackIcon from '../../../assets/junodark.svg';

const Header = (props) => {
    const stakeDrop = () => {
        window.open('https://stakedrop.junochain.com', '_blank');
    };

    return (
        <div className="header_class">
            <div className="header_right1"/>
            <img alt="icon" className="header_right1_logo" src={junoBlackIcon} />
            <ExpansionButton showNavBar={props.showNavBar}/>
            <div className="stake_drop" onClick={stakeDrop}>
                {variables[props.lang].docs}
                <img alt="link" src={externelLink} />
            </div>
            <div className="stake_drop" onClick={stakeDrop}>
                {variables[props.lang].github}
                <img alt="link" src={externelLink} />
            </div>
            <div className="stake_drop" onClick={stakeDrop}>
                {variables[props.lang].blog}
                <img alt="link" src={externelLink} />
            </div>
            <div className="stake_drop" onClick={stakeDrop}>
                {variables[props.lang].updates}
                <img alt="link" src={externelLink} />
            </div>
            <div className="stake_drop" onClick={stakeDrop}>
                {variables[props.lang].discord}
                <img alt="link" src={externelLink} />
            </div>
            {/* <div className="stake_drop" onClick={stakeDrop}> */}
            {/*    {variables[props.lang].stakedrop} */}
            {/*    <img alt="link" src={externelLink} /> */}
            {/* </div> */}
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
    showNavBar: PropTypes.func.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

const actionToProps = {
    showNavBar,
};

export default withRouter(connect(stateToProps, actionToProps)(Header));
