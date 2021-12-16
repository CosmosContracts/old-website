import { HIDE_NAV_CONTENT_SET, SHOW_NAV_CONTENT_SET } from '../constants/navBar';

export const showNavBar = () => {
    return {
        type: SHOW_NAV_CONTENT_SET,
    };
};

export const hideNavBar = () => {
    return {
        type: HIDE_NAV_CONTENT_SET,
    };
};
