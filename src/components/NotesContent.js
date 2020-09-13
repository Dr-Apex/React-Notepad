import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Editable from './Editable';
import { editNote } from '../actions';
import history from '../history';

const NotesContent = (props) => {
  const noteId = props.match.params.id;
  const dispatch = useDispatch();
  const note = useSelector(state => state.notes[noteId]);
  const [renameTitle, setRenameTitle] = useState(note.name);
  const [renameContent, setRenameContent] = useState(note.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(renameContent);
    dispatch(editNote(noteId, renameTitle, renameContent));
    history.push('/');
  };

  const getNote = () => {
    return (
      <div>
        <form onSubmit={(e) => onFormSubmit(e)}>
          <div className="title">
            <Editable
              text={note.name}
              placeholder="Rename"
              type="input"
            >
              <input
                type="text"
                placeholder={note.name}
                onChange={(e) => setRenameTitle(e.target.value)}
              />
            </Editable>
          </div>
          <div className="value">
            <Editable
              text={note.value}
              placeholder="Rename"
              type="textarea"
            >
              <textarea
                placeholder={note.value}
                onChange={(e) => setRenameContent(e.target.value)}
              />
            </Editable>
          </div>
          <input className="submit" type="submit" />
        </form>
      </div>
    );
  };

  return (
    <div className="notes-content">
      <Link to="/">Back</Link>
      {getNote()}
    </div>
  );
};

export default NotesContent;
