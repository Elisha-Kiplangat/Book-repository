import { useReducer } from 'react';
import './App.scss';
import Form from './components/Form';
import BookList from './components/BookList';
import BookReducer, { initialState } from './components/BookReducer';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(BookReducer, initialState);

  return (
    <div className="app-container">
      <h1>My Book Collection</h1>
      <Form dispatch={dispatch} />
      <BookList books={state.books} dispatch={dispatch} />
    </div>
  );
};

export default App;
