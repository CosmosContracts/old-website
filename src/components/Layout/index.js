import React from 'react';
import Toast from '../Toast';
import { ToastProvider } from '../Toast/Toast.Provider';
import PropTypes from 'prop-types';
import './index.css';

const Layout = ({ children }) => {
    return (
        <div className="juno_website">
            <div className="content_div scroll_bar">
                <ToastProvider>
                    <Toast />
                    {children}
                </ToastProvider>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
