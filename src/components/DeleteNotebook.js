import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNotebook, deleteNote } from '../actions';
import { Button } from 'react-bootstrap';

const DeleteNotebook = ({ nbid }) => {
  const dispatch = useDispatch();
  const notes = useSelector(state => Object.values(state.notes));

  const deleteAll = () => {
    if (notes.length === 0) {
      console.log('Select notebook to delete!');
    } else {
      dispatch(deleteNotebook(nbid));
      notes.forEach(n => {
        if (n.nbid === nbid) {
          dispatch(deleteNote(n.id));
        } else {
          return null;
        }
      });
    }
  };

  return (
    <Button onClick={() => deleteAll()} variant="danger">Delete</Button>
  );
};

export default DeleteNotebook;
