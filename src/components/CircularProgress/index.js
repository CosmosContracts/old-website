import React from 'react';
import { CircularProgress as MaterialCircularProgress } from '@material-ui/core';
import './index.css';

const CircularProgress = () => {
    return (
        <div className="circular_progress">
            <MaterialCircularProgress/>
        </div>
    );
};

export default CircularProgress;
