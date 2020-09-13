import { combineReducers } from 'redux';
import notebookReducer from './notebookReducer';
import noteReducer from './noteReducer';
import currentNotebook from './currentNotebook';

export default combineReducers({
  notebook: notebookReducer,
  notes: noteReducer,
  nbid: currentNotebook
});
