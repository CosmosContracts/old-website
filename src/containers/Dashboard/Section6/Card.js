import React from 'react';
import * as PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card_logo"/>
            <p className="card_header">
                {props.data.head}
            </p>
            <p className="card_content">
                {props.data.content}
            </p>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object,
};

export default Card;
