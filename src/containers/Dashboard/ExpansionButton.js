import React from 'react';
import * as PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const ExpansionButton = (props) => {
    return (
        <Button
            aria-label="Open drawer"
            className="toggle_button"
            color="inherit"
            onClick={props.showNavBar}>
            <Menu/>
        </Button>
    );
};

ExpansionButton.propTypes = {
    showNavBar: PropTypes.func.isRequired,
};

export default ExpansionButton;