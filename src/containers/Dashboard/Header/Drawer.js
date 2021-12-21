import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { connect } from 'react-redux';
import { hideNavBar, showNavBar } from '../../../actions/navBar';
import variables from '../../../utils/variables';
import externelLink from '../../../assets/externel-link.png';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

const Drawer = (props) => {
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
        <div className="drawer_class">
            <SwipeableDrawer
                anchor="right"
                className="drawer"
                open={props.show}
                onClose={props.hideNavBar}
                onKeyDown={props.hideNavBar}
                onOpen={props.showNavBar}>
                <div className="drawer_section">
                    <div onClick={docs}>
                        {variables[props.lang].docs}
                        <img alt="link" src={externelLink} />
                    </div>
                    <div onClick={github}>
                        {variables[props.lang].github}
                        <img alt="link" src={externelLink} />
                    </div>
                    <div onClick={blog}>
                        {variables[props.lang].blog}
                        <img alt="link" src={externelLink} />
                    </div>
                    <div onClick={updates}>
                        {variables[props.lang].updates}
                        <img alt="link" src={externelLink} />
                    </div>
                    <div onClick={discord}>
                        {variables[props.lang].discord}
                        <img alt="link" src={externelLink} />
                    </div>
                </div>
            </SwipeableDrawer>
        </div>
    );
};

Drawer.propTypes = {
    classes: PropTypes.object.isRequired,
    hideNavBar: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    showNavBar: PropTypes.func.isRequired,
    show: PropTypes.bool,
};

const stateToProps = (state) => {
    return {
        show: state.navBar.show,
        lang: state.language,
    };
};

const actionToProps = {
    hideNavBar,
    showNavBar,
};

export default withStyles(styles)(connect(stateToProps, actionToProps)(Drawer));