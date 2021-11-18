import { Button, Container, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateNote } from '../action/api';

function Form(props) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const id = props.match.params.id;

  const handleUpdate = () => {
    dispatch(
      updateNote(id, {
        title,
        text,
      }),
    );
    setTitle('');
    setText('');
  };

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
        onClick={() => handleUpdate()}
        className={classes.button}
        fullWidth
        variant="contained"
        color="primary">
        Update Note
      </Button>
    </Container>
  );
}

export default Form;
