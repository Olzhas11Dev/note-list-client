import axios from 'axios';

export const fetchData = () => {
  return function (dispatch) {
    axios.get('https://server-note-list.herokuapp.com/notes').then((res) => {
      dispatch({ type: 'GET_ALL_NOTES', payload: res.data });
    });
  };
};

export const removeNote = (id) => {
  return async function (dispatch) {
    await axios.delete(`https://server-note-list.herokuapp.com/notes/${id}`).then((res) => {
      dispatch({ type: 'REMOVE_NOTE', payload: id });
    });
  };
};
