export const TYPE_COLLAPSE_DRAWER = 'COLLAPSE_DRAWER';
export const TYPE_CHANGE_THEME_MODE = 'CHANGE_THEME_MODE';

export const collapseDrawer = (collapsed) => {
  return {
    type: TYPE_COLLAPSE_DRAWER,
    payload: collapsed,
  };
};

export const changeTheme = () => {
  return {
    type: TYPE_CHANGE_THEME_MODE,
  };
};

export const setModalVisibility = ({visibility, mode}) => {
  return {
    type: TYPE_SET_MODAL_VISIBILITY,
    payload: {visibility, mode},
  };
};
