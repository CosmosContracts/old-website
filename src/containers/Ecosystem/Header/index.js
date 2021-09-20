import React from 'react';
import './index.css';
import variables from '../../../utils/variables';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import externelLink from '../../../assets/externel-link.png';
import logoText from '../../../assets/juno_white.svg';

const Header = (props) => {
    const stakeDrop = () => {
        window.open('https://stakedrop.junochain.com', '_blank');
    };

    const docs = () => {
        window.open('https://docs.junochain.com/', '_blank');
    };

    const blog = () => {
        window.open('https://medium.com/@JunoNetwork/', '_blank');
    };

    const goBack = () => {
        navigate('/');
    };

    return (
        <div className="eco_stym_header">

            <img alt="logoText" className="eco_stym_logoText" src={logoText} onClick={goBack} />
            <div className="eco_stym_header_menu">

                <div className="eco_stym_stake_drop" onClick={docs}>
                    {variables[props.lang].docs}
                    <img alt="link" src={externelLink} />
                </div>
                <div className="eco_stym_stake_drop" onClick={stakeDrop}>
                    {variables[props.lang].stakedrop}
                    <img alt="link" src={externelLink} />
                </div>
                <div className="eco_stym_stake_drop" onClick={blog}>
                    {variables[props.lang].blog}
                    <img alt="link" src={externelLink} />
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps, null)(Header);
