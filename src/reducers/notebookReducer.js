import _ from 'lodash';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CREATE_NOTEBOOK':
      return { ...state, payload };
    case 'FETCH_NOTEBOOKS':
      return { ...state, ..._.mapKeys(payload, 'id') };
    case 'EDIT_NOTEBOOK':
      return { ...state, payload };
    case 'DELETE_NOTEBOOK':
      return _.omit(state, payload);
    default:
      return state;
  }
};
