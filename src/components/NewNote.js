import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createNote } from '../actions';
import history from '../history';

const NewNote = () => {
  const dispatch = useDispatch();
  const nbid = useSelector(state => state.nbid);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote(noteTitle, noteContent, nbid));
    history.push('/');
  };

  return (
    <div className="create-new-note">
      <div className="id">Notebook ID: {nbid}</div>
      <Link to="/">Back</Link>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input className="title" type="text" placeholder="Title" onChange={(e) => setNoteTitle(e.target.value)} />
        <textarea className="content" placeholder="type something..." onChange={(e) => setNoteContent(e.target.value)} />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default NewNote;
