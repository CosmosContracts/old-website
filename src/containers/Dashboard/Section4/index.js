import React from 'react';
import speedIcon from '../../../assets/section4/speed.svg';
import costIcon from '../../../assets/section4/cost.svg';
import interIcon from '../../../assets/section4/inter.svg';
import smartIcon from '../../../assets/section4/smartcontracts.svg';
import './index.css';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import variables from '../../../utils/variables';

const Section4 = (props) => {
    const list = [{
        name: variables[props.lang].section4_name_speed,
        content: variables[props.lang].section4_content_speed,
        img: speedIcon,
    }, {
        name: variables[props.lang].section4_name_cost,
        content: variables[props.lang].section4_content_cost,
        img: costIcon,
    }, {
        name: variables[props.lang].section4_name_inter,
        content: variables[props.lang].section4_content_inter,
        img: interIcon,
    }, {
        name: variables[props.lang].section4_name_smart,
        content: variables[props.lang].section4_content_smart,
        img: smartIcon,
    },
    //     {
    //     name: variables[netprops.lang].section4_name_evm,
    //     content: variables[props.lang].section4_content_evm,
    //     img: evmIcon,
    // }
    ];

    return (
        <div className="section4">
            {
                list.map((item, index) => (
                    <div key={index} className="section4_list">
                        <img alt={item.name} src={item.img} />
                        <div className="section4_name">
                            {item.name}
                        </div>
                        <div className="section4_content">
                            {item.content}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

Section4.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps, null)(Section4);
