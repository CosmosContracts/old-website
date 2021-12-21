import React, { useEffect, useState } from 'react';
import './index.css';
import variables from '../../../utils/variables';
import { connect } from 'react-redux';
import { insertData } from '../../../utils/helper';
import { useEcosystem } from '../Ecosystem.provider';
const Introduction = (props) => {
    const { ecosystems } = useEcosystem();
    const [textIntro, setTextInro] = useState('');

    useEffect(() => {
        const introductionText = insertData({
            text: variables[props.lang].ecosystem_introduction_app,
            options: {
                data: [{ NUMBER_APP: ecosystems.length }],
                tags: [{ tag: 'em', className: 'eco_stym_bold' }, { tag: 'em', className: 'eco_stym_bold' }, { tag: 'em', className: 'eco_stym_bold' }],
                root: { tag: 'p', className: 'eco_stym_introduction_number_app' },
            },
        });
        setTextInro(introductionText);
    }, [ecosystems]);

    return (
        <div className="eco_stym_introduction">
            <h3 className="eco_stym_title">{variables[props.lang].ecosystem_title}</h3>
            {textIntro}
            <p className="eco_stym_introduction_text">{variables[props.lang].ecosystem_introduction_text}</p>
        </div>
    );
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps, null)(Introduction);
