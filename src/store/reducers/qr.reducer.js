import { TYPE_SET_QRS, TYPE_SET_MODAL_VISIBILITY, TYPE_SET_QRID } from '../actions/qr.action';

const initialState = {
  qrs: [],
  qrsd: [],
  modal: { visibility: false, mode: '' },
  qrID: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_SET_QRS:
      return {
        ...state,
        qrs: payload,
      };
    case TYPE_SET_QRID:
      return {
        ...state,
        qrID: payload,
      };
    case TYPE_SET_MODAL_VISIBILITY:
      return {
        ...state,
        modal: payload,
      };
    default:
      return {
        ...state,
      };
  }
};