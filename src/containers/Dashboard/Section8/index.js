import React from 'react';
import { Button, Link } from '@material-ui/core';
import './index.css';
import telegramIcon from '../../../assets/section8/telegram.svg';
import twitterIcon from '../../../assets/section8/twitter.svg';
import discordIcon from '../../../assets/section8/discord.svg';
import githubIcon from '../../../assets/section8/github.svg';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import variables from '../../../utils/variables';

const Section8 = (props) => {
    return (
        <div className="section8">
            <div className="section8_header"> {variables[props.lang].meet_global_community} </div>
            <div className="section8_content">
                <Link href="https://t.me/JunoNetwork" target="_blank" rel="noopener">
                    <div className="icon_section">
                        <img alt="telegram" src={telegramIcon} />
                    </div>
                    {variables[props.lang].telegram}
                </Link>
                <Link href="https://twitter.com/JunoNetwork" target="_blank" rel="noopener">
                    <div className="icon_section">
                        <img alt="juno-twitter" className="twitter_icon" src={twitterIcon} />
                    </div>
                    {variables[props.lang].twitter}
                </Link>
                <Link className="no_margin" href="https://discord.gg/QcWPfK4gJ2" target="_blank" rel="noopener">
                    <div className="icon_section">
                        <img alt="juno-discord" src={discordIcon} />
                    </div>
                    {variables[props.lang].discord}
                </Link>
                <Link className="no_margin" href="https://github.com/CosmosContracts" target="_blank" rel="noopener">
                    <div className="icon_section">
                        <img alt="juno-github" src={githubIcon} />
                    </div>
                    {variables[props.lang].github}
                </Link>
            </div>
        </div>
    );
};

Section8.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps, null)(Section8);
