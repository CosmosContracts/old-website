import React from 'react';
import { Button } from '@material-ui/core';
import './index.css';
import telegramIcon from '../../../assets/section8/telegram.svg';
import twitterIcon from '../../../assets/section8/twitter.svg';
import discordIcon from '../../../assets/section8/discord.svg';
import githubIcon from '../../../assets/section8/github.svg';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import variables from '../../../utils/variables';

const Section8 = (props) => {
    const docs = () => {
        window.open('https://docs.junochain.com/', '_blank');
    };

    const github = () => {
        window.open('https://github.com/CosmosContracts', '_blank');
    };

    const updates = () => {
        window.open('https://twitter.com/JunoNetwork', '_blank');
    };

    const discord = () => {
        window.open('https://discord.gg/QcWPfK4gJ2', '_blank');
    };

    const telegram = () => {
        window.open('https://t.me/JunoNetwork', '_blank');
    };

    return (
        <div className="section8">
            <div className="section8_header header">
                {variables[props.lang].meet_global_community}
            </div>
            <div className="section8_content">
                <Button onClick={telegram}>
                    <div className="icon_section">
                        <img alt="telegram" src={telegramIcon} />
                    </div>
                    {variables[props.lang].telegram}
                </Button>
                <Button onClick={updates}>
                    <div className="icon_section">
                        <img alt="juno-twitter" className="twitter_icon" src={twitterIcon} />
                    </div>
                    {variables[props.lang].twitter}
                </Button>
                <Button className="no_margin" onClick={discord}>
                    <div className="icon_section">
                        <img alt="telegram" src={discordIcon} />
                    </div>
                    {variables[props.lang].discord}
                </Button>
                <Button className="no_margin" onClick={github}>
                    <div className="icon_section">
                        <img alt="juno-twitter" src={githubIcon} />
                    </div>
                    {variables[props.lang].github}
                </Button>
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
