export default (state = 0, { type, payload }) => {
  switch (type) {
    case 'CURRENT_NBID':
      return payload;
    default:
      return state;
  }
};
