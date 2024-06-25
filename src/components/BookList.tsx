
interface Book {
  id: number;
  title: string;
  author: string;
  year: string;
}

const BookList = () => {

    const books: Book[] = [
        {
          id: 1,
          title: 'The Great Gatsby',
          author: 'Scot',
          year: '1925'
        }
    ]
        

  return (
    <>
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default BookList


