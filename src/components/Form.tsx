import './Form.scss'
import { useState } from 'react';


const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (title && author && year) {
    //   addBook({ title, author, year });
      setTitle('');
      setAuthor('');
      setYear('');
    }
  };

  return (
    <>
    <div className="form-container">
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor='title' >Title:</label>   
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
        <label htmlFor='author' >Author:</label>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
        <label htmlFor='year'>Year:</label>
       <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      
      <button type="submit">Add Book</button>
    </form>
    </div>
    

    </>
  );
};

export default Form;


