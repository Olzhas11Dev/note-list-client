import { Button, Container, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { addNewNote } from '../action/api';
import { useDispatch } from 'react-redux';

function Form() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const useStyles = makeStyles({
    inputs: {
      marginTop: '10px',
      marginBottom: '10px',
    },

    button: {
      height: '48px',
    },
  });

  const classes = useStyles();

  const handleSend = async (e) => {
    e.preventDefault();
    let objData = {
      title,
      text,
    };

    await dispatch(addNewNote(objData));

    setTitle('');
    setText('');
  };

  return (
    <Container maxWidth="sm">
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        required
        className={classes.inputs}
        label="Note Title"
        variant="outlined"
        fullWidth
        value={title}
      />
      <TextField
        onChange={(e) => setText(e.target.value)}
        className={classes.inputs}
        multiline
        rows={7}
        label="Text"
        variant="outlined"
        fullWidth
        required
        value={text}
      />
      <Button
        onClick={handleSend}
        className={classes.button}
        fullWidth
        variant="contained"
        color="primary">
        Save Note
      </Button>
    </Container>
  );
}

export default Form;
