import notepad from '../api/notepad';

// Actions for Notebook
export const createNotebook = title => async dispatch => {
  const response = await notepad.post('/notebook', {name: title});

  dispatch({ type: 'CREATE_NOTEBOOK', payload: response.data });
};

export const fetchNotebooks = () => async dispatch => {
  const response = await notepad.get('/notebook');

  dispatch({ type: 'FETCH_NOTEBOOKS', payload: response.data });
};

export const editNotebook = ( id, title ) => async dispatch => {
  const response = await notepad.patch(`/notebook/${id}`, {name: title});

  dispatch({ type: 'EDIT_NOTEBOOK', payload: response.data });
  window.location.reload();
};

export const deleteNotebook = id => async dispatch => {
  await notepad.delete(`/notebook/${id}`);

  dispatch({ type: 'DELETE_NOTEBOOK', payload: id });
  window.location.reload();
};

// Actions for Note
export const currentNotebookId = id => dispatch => {
  console.log(id);
  dispatch({ type: 'CURRENT_NBID', payload: id });
};

export const createNote = (title, content, nbid) => async dispatch => {
  const response = await notepad.post('/notes', {name: title, value: content, nbid: nbid});

  dispatch({ type: 'CREATE_NOTE', payload: response.data });
  window.location.reload();
};

export const fetchNotes = () => async dispatch => {
  const response = await notepad.get('/notes');

  dispatch({ type: 'FETCH_NOTES', payload: response.data });
};

export const editNote = ( id, title, content ) => async dispatch => {
  const response = await notepad.patch(`/notes/${id}`, {name: title, value: content});

  dispatch({ type: 'EDIT_NOTE', payload: response.data });
  window.location.reload();
};

export const deleteNote = id => async dispatch => {
  await notepad.delete(`/notes/${id}`);

  dispatch({ type: 'DELETE_NOTE', payload: id });
  window.location.reload();
};
