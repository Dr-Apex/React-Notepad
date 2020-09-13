import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote } from '../actions';
import { Button, ListGroup } from 'react-bootstrap';

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => Object.values(state.notes));
  const nbid = useSelector(state => state.nbid);

  const renderListItem = () => {
    if (notes[0] === undefined) {
      console.log('Loading...');
    } else {
      return notes.map(n => {
        if (n.nbid === nbid) {
          return (
            <ListGroup.Item as="li" className="notes-list" key={n.id}>
              <Link to={`/notepad/note/${n.id}`}>{n.name}</Link>
              <Button onClick={() => dispatch(deleteNote(n.id))} variant="danger">Delete</Button>
            </ListGroup.Item>
          );
        } else {
          return null;
        }
      });
    }
  };

  return (
    <div className="notes">
      <h1>Notes</h1>
      <div>
        <ListGroup>
          {renderListItem()}
        </ListGroup>
      </div>
      <Link className="new-note" to="/notepad/new-note">+</Link>
    </div>
  );
};

export default Notes;
