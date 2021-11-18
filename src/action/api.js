import axios from 'axios';

export const fetchData = () => {
  return function (dispatch) {
    axios.get('https://server-note-list.herokuapp.com/notes').then((res) => {
      dispatch({ type: 'GET_ALL_NOTES', payload: res.data });
    });
  };
};

export const addNewNote = (oneNote) => {
  return async function (dispatch) {
    await axios.post('https://server-note-list.herokuapp.com/notes/post', oneNote).then((res) => {
      dispatch({ type: 'ADD_NEW_NOTE', payload: oneNote });
    });
  };
};

export const removeNote = (id) => {
  return async function (dispatch) {
    await axios.delete(`https://server-note-list.herokuapp.com/notes/${id}`).then((res) => {
      dispatch({ type: 'REMOVE_NOTE', payload: id });
      dispatch(fetchData());
    });
  };
};

export const updateNote = (id, note) => {
  return async function (dispatch) {
    await axios.put(`https://server-note-list.herokuapp.com/notes/${id}`, note).then((res) => {
      dispatch(fetchData());
    });
  };
};
