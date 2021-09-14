import React, { useState } from 'react';
import logo1 from '../../assets/header/logo1.png';
import Cards from './Cards';
import Filter from './Filter';
import Header from './Header';
import './index.css';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Introduction from './Introduction';

const Ecosystem = (props) => {
    const [filter, setFilter] = useState('none');

    return (
        <div className="eco_stym_ecosystem">
            <img alt="logo1" className="eco_stym_logo1" src={logo1} />
            <Header />
            <Introduction />
            <Filter filter={filter} lang={props.lang} setFilter={setFilter} />
            <Cards filter={filter} />
        </div>
    );
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default withRouter(connect(stateToProps, null)(Ecosystem));
