import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { useEcosystem } from '../Ecosystem.provider';
import Card from '../Card';
const Cards = (props) => {
    const { ecosystems } = useEcosystem();

    return (
        <div className="eco_stym_cards">
            {ecosystems
                .filter((app, index) => props.filter === 'none' || props.filter === app.type)
                .map((app, index) => {
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
            })}
        </div>
    );
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps, null)(Cards);
