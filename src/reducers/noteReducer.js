import _ from 'lodash';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CREATE_NOTE':
      return { ...state, payload };
    case 'FETCH_NOTES':
      return { ...state, ..._.mapKeys(payload, 'id') };
    case 'EDIT_NOTE':
      return { ...state, payload };
    case 'DELETE_NOTE':
      return _.omit(state, payload);
    default:
      return state;
  }
};
