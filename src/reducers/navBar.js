import { combineReducers } from 'redux';
import { HIDE_NAV_CONTENT_SET, SHOW_NAV_CONTENT_SET } from '../constants/navBar';

const show = (state = false, action) => {
    switch (action.type) {
    case SHOW_NAV_CONTENT_SET:
        return true;
    case HIDE_NAV_CONTENT_SET:
        return false;
    default:
        return state;
    }
};

export default combineReducers({
    show,
});
