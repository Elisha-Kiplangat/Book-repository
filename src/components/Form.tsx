import React, { useEffect, useRef } from 'react';
import './Form.scss';

interface FormProps {
  dispatch: React.Dispatch<any>;
  bookToEdit?: { id: number; title: string; author: string; year: string } | null;
}

const Form: React.FC<FormProps> = ({ dispatch, bookToEdit }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bookToEdit && titleRef.current && authorRef.current && yearRef.current) {
      titleRef.current.value = bookToEdit.title;
      authorRef.current.value = bookToEdit.author;
      yearRef.current.value = bookToEdit.year;
    } else {
      if (titleRef.current) titleRef.current.value = '';
      if (authorRef.current) authorRef.current.value = '';
      if (yearRef.current) yearRef.current.value = '';
    }
  }, [bookToEdit]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current && authorRef.current && yearRef.current) {
      const title = titleRef.current.value;
      const author = authorRef.current.value;
      const year = yearRef.current.value;

      if (title && author && year) {
        if (bookToEdit) {
          dispatch({
            type: 'EDIT_BOOK',
            payload: {
              id: bookToEdit.id,
              title,
              author,
              year,
            },
          });
        } else {
          dispatch({
            type: 'ADD_BOOK',
            payload: {
              title,
              author,
              year,
            },
          });
        }
        titleRef.current.value = '';
        authorRef.current.value = '';
        yearRef.current.value = '';
      }
    }
  };

  return (
    <div className="form-container">
      <h2>{bookToEdit ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          ref={titleRef}
          required
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          placeholder="Author"
          ref={authorRef}
          required
        />
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          placeholder="Year"
          ref={yearRef}
          required
        />
        <button type="submit">{bookToEdit ? 'Update Book' : 'Add Book'}</button>
      </form>
    </div>
  );
};

export default Form;
