import React from 'react';
import './index.css';
import variables from '../../../utils/variables';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import externelLink from '../../../assets/externel-link.png';
import ExpansionButton from '../ExpansionButton';
import { showNavBar } from '../../../actions/navBar';
import junoBlackIcon from '../../../assets/junodark.svg';

const Header = (props) => {
    const docs = () => {
        window.open('https://docs.junochain.com/', '_blank');
    };

    const github = () => {
        window.open('https://github.com/CosmosContracts', '_blank');
    };

    const blog = () => {
        window.open('https://medium.com/@JunoNetwork/', '_blank');
    };

    const updates = () => {
        window.open('https://twitter.com/JunoNetwork', '_blank');
    };

    const discord = () => {
        window.open('https://discord.gg/QcWPfK4gJ2', '_blank');
    };

    return (
        <div className="header_class">
            <div className="header_right1"/>
            <img alt="icon" className="header_right1_logo" src={junoBlackIcon} />
            <ExpansionButton showNavBar={props.showNavBar}/>
            <div className="stake_drop" onClick={docs}>
                {variables[props.lang].docs}
                <img alt="link" src={externelLink} />
            </div>
            <div className="stake_drop" onClick={github}>
                {variables[props.lang].github}
                <img alt="link" src={externelLink} />
            </div>
            <div className="stake_drop" onClick={blog}>
                {variables[props.lang].blog}
                <img alt="link" src={externelLink} />
            </div>
            <div className="stake_drop" onClick={updates}>
                {variables[props.lang].updates}
                <img alt="link" src={externelLink} />
            </div>
            <div className="stake_drop" onClick={discord}>
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

export default connect(stateToProps, actionToProps)(Header);