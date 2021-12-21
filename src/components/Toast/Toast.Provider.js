import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toastOpen, setToastOpen] = useState(false);
    const [toastText, setToastText] = useState('');
    const [toastSeverity, setToastSeverity] = useState('info'); // can be success, info, warning, error

    const closeToast = () => setToastOpen(false);
    const showToast = ({ text, severity }) => {
        setToastText(text);
        setToastSeverity(severity);
        setToastOpen(true);
    };

    return <ToastContext.Provider value={{ toastText, toastSeverity, toastOpen, closeToast, showToast }}>{children}</ToastContext.Provider>;
};
