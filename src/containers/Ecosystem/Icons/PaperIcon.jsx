import React from 'react';
import { SvgIcon } from '@material-ui/core';

const LogoIcon = (props) => {
    const color = props.color ? props.color : '#666666';
    const otherProps = { ...props };
    delete otherProps.color;
    return (
        <SvgIcon {...otherProps}>
            <svg fill="none" height="24" width="22" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19v1.5C6 22.75 3.5 23 3.5 23h15a2.5 2.5 0 002.5-2.5V19H6z" stroke={color} strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" />
                <path d="M18 16V1H1v19.5A2.5 2.5 0 003.5 23H5M6 6h7m-7 4h7m-7 4h7" stroke={color} strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" />
            </svg>
        </SvgIcon>
    );
};

export default LogoIcon;
