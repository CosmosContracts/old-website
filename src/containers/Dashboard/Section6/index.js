import React from 'react';
import './index.css';
import Card from './Card';
import logo1 from '../../../assets/section6/logo1.png';
import logo2 from '../../../assets/section6/logo2.png';
import variables from '../../../utils/variables';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Section6 = (props) => {
    const list1 = {
        head: variables[props.lang].grass_roots_card_head,
        content: variables[props.lang].grass_roots_card_content,
    };

    return (
        <div className="section6_parent">
            <div className="section6">
                <div className="section6_row1">
                    <div className="section6_s1">
                        <div className="section6_s1header">
                            {variables[props.lang].grass_roots_initiative}
                        </div>
                        <div className="section6_s1content">
                            {variables[props.lang].grass_roots_initiative_content}
                        </div>
                    </div>
                    {/* <div className="section6_s2"> */}
                    {/*    <Card data={list1}/> */}
                    {/* </div> */}
                </div>
                <div className="section6_logo"/>
                {/* <div className="section6_card1"> */}
                {/*    <Card data={list1}/> */}
                {/* </div> */}
                <div className="section6_row2">
                    <Card data={list1}/>
                    <Card data={list1}/>
                    <Card data={list1}/>
                </div>
            </div>
            <img alt="logo2" className="section6_logo2" src={logo2}/>
            <img alt="logo1" className="section6_logo1" src={logo1}/>
        </div>
    );
};

Section6.propTypes = {
    lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
    };
};

export default connect(stateToProps, null)(Section6);
