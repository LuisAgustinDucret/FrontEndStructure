import { TYPE_COLLAPSE_DRAWER, TYPE_CHANGE_THEME_MODE /* TYPE_ON_PAGE_POST */ } from '../actions/config.action';

const initialState = {
  drawerCollapse: true,
  darkMode: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_COLLAPSE_DRAWER:
      return {
        ...state,
        drawerCollapse: payload,
      };
    case TYPE_CHANGE_THEME_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default reducer;