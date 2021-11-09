import { Button, Container, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';

function Form() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

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
    try {
      e.preventDefault();
      let objData = {
        title,
        text,
      };

      const res = await axios.post('https://6176c9f903178d00173dae84.mockapi.io/Notes/', objData);
      console.log(res.data);

      setTitle('');
      setText('');
    } catch (error) {
      console.log(error);
    }
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
