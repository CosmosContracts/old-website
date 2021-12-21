import React from 'react';
import { Snackbar } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import './index.css';
import WarningIcon from '@material-ui/icons/Warning';
import CheckIcon from '@material-ui/icons/Check';
import InfoIcon from '@material-ui/icons/Info';
import { useToast } from './Toast.Provider';

const Toast = () => {
    const { closeToast, toastText, toastSeverity, toastOpen } = useToast();
    const className = 'toast toast-' + toastSeverity;

    const icons = {
        error: <ErrorIcon className="toast_icon" />,
        warning: <WarningIcon className="toast_icon" />,
        success: <CheckIcon className="toast_icon" />,
        info: <InfoIcon className="toast_icon" />,
    };
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            autoHideDuration={2000}
            open={toastOpen}
            onClose={closeToast}
        >
            <div className={className}>
                {icons[toastSeverity]}
                <p>{toastText}</p>
            </div>
        </Snackbar>
    );
};

export default Toast;
