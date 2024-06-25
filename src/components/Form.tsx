import React, { useState } from 'react';
import './Form.scss';

interface FormProps {
  dispatch: React.Dispatch<any>;
}

const Form: React.FC<FormProps> = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && author && year) {
      dispatch({
        type: 'ADD_BOOK',
        payload: {
          title,
          author,
          year
        }
      });
      setTitle('');
      setAuthor('');
      setYear('');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
