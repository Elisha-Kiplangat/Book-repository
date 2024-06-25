import React from 'react';
import './BookList.scss';

export interface Book {
  id: number;
  title: string;
  author: string;
  year: string;
}

interface BookList {
  books: Book[];
  dispatch: React.Dispatch<any>;
}

const BookList: React.FC<BookList> = ({ books, dispatch }) => {
  const handleEdit = (id: number) => {
    const book = books.find((book) => book.id === id);
    if (book) {
      dispatch({
        type: 'EDIT_BOOK',
        payload: {
          id: book.id,
          title: book.title,
          author: book.author,
          year: book.year
        }
        });
    }
  };

  const handleDelete = (id: number) => {
    dispatch({ type: 'DELETE_BOOK', payload: id });
  };   

  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      <div>
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>
                    <button onClick={() => handleEdit(book.id)}>Edit</button>
                    <button onClick={() => handleDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;
