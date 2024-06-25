import { useReducer } from 'react';
import './App.scss';
import BookList from './components/BookList';
import BookReducer, { initialState } from './components/BookReducer';

const App = () => {
  const [state, dispatch] = useReducer(BookReducer, initialState);

  return (
    <div className="app-container">
      <h1>My Book Collection</h1>
      <BookList books={state.books} dispatch={dispatch} />
    </div>
  );
};

export default App;
