import React, { useEffect } from 'react';
import './index.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { useEcosystem } from '../Ecosystem.provider';
import Card from '../Card';
const Cards = (props) => {
    const { ecosystems } = useEcosystem();

    return (
        <div className="eco_stym_cards">
            {ecosystems.map((app, index) => {
                if (props.filter === 'none' || props.filter === app.type) {
                    return <Card
                        key={`${index}-${app.name}`}
                        address={app.address}
                        githubLink={app.githubLink}
                        image={app.image}
                        lang={props.lang}
                        name={app.name}
                        tgLink={app.tgLink}
                        twitterLink={app.twitterLink}
                        type={app.type}
                    />;
                }
            })}
        </div>
    );
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default withRouter(connect(stateToProps, null)(Cards));
