const initialState = {
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };
    case 'REMOVE_NOTE':
      return { ...state, notes: state.notes.filter((elem) => elem.id !== action.payload) };
    case 'GET_ALL_NOTES':
      return { ...state, notes: action.payload };
    case 'UPDATE_NOTE':
      return { ...state, notes: action.payload };

    default:
      return state;
  }
};
