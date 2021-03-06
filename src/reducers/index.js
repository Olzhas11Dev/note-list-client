import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { notesReducer } from './NotesReducers';

const rootReducer = combineReducers({
  myNotes: notesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
