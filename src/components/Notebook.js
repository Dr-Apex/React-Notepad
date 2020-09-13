import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Editable from './Editable';
import DeleteNotebook from './DeleteNotebook';
import { createNotebook, editNotebook, currentNotebookId, fetchNotes } from '../actions';
import { Button, ListGroup } from 'react-bootstrap';

const Notebook = () => {
  const dispatch = useDispatch();
  const notebook = useSelector(state => Object.values(state.notebook));
  const [currentNotebook, setCurrentNotebook] = useState('');
  const [renameNotebook, setRenameNotebook] = useState('');
  const [selectedNotebook, setSelectedNotebook] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createNotebook(currentNotebook));
  };

  const renderListItem = () => {
    if (notebook[0] === undefined) {
      return <div>Loading...</div>;
    } else {
      const getNotes = (nbid) => {
        setSelectedNotebook(nbid);
        dispatch(currentNotebookId(nbid));
        dispatch(fetchNotes());
      };
      return notebook.map(nb => {
        let selected = selectedNotebook === nb.id ? "selected" : null;
        return (
          <ListGroup.Item as="li" className={`notebook-list ${selected}`} key={nb.id}>
            <Editable
              text={nb.name}
              placeholder="Rename"
              type="input"
            >
              <input
                type="text"
                placeholder={nb.name}
                onChange={(e) => setRenameNotebook(e.target.value)}
                onBlur={() => dispatch(editNotebook(nb.id, renameNotebook))}
              />
            </Editable>
            <DeleteNotebook nbid={nb.id} />
            <Button onClick={() => getNotes(nb.id)} variant="success">Open</Button>
          </ListGroup.Item>
        );
      });
    }
  };

  return (
    <div className="notebook">
      <form onSubmit={(e) => onFormSubmit(e)}>
        <h1>Notebook</h1>
        <Button as="input" className="creatBut" type="submit" value="Create" />
        <input className="create" type="text" placeholder="+ new notebook" onChange={(e) => setCurrentNotebook(e.target.value)} />
      </form>
      <div>
        <ListGroup>
          {renderListItem()}
        </ListGroup>
      </div>
    </div>
  );
};

export default Notebook;
