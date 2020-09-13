import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Notebook from './Notebook';
import Notes from './Notes';
import { fetchNotebooks } from '../actions';
import { Container, Row, Col } from 'react-bootstrap';

const NotesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotebooks());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col><Notebook /></Col>
        <Col><Notes /></Col>
      </Row>
      <div className="footer">
        <div className="app_name">React Notepad 2020 v1.0.0</div>
      </div>
    </Container>
  );
};

export default NotesContainer;
