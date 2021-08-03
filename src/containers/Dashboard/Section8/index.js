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
    return (
        <div className="section8">
            <div className="section8_header"> {variables[props.lang].meet_global_community} </div>
            <div className="section8_content">
                <Button>
                    <div className="icon_section">
                        <img alt="telegram" src={telegramIcon} />
                    </div>
                    {variables[props.lang].telegram}
                </Button>
                <Button>
                    <div className="icon_section">
                        <img alt="juno-twitter" className="twitter_icon" src={twitterIcon} />
                    </div>
                    {variables[props.lang].twitter}
                </Button>
                <Button className="no_margin">
                    <div className="icon_section">
                        <img alt="telegram" src={discordIcon} />
                    </div>
                    {variables[props.lang].discord}
                </Button>
                <Button className="no_margin">
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
