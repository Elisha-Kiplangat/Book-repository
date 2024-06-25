interface Book {
  id: number;
  title: string;
  author: string;
  year: string;
}

export interface State {
  books: Book[];
}

type Action =
  | { type: 'ADD_BOOK'; payload: { title: string; author: string; year: string } }
  | { type: 'DELETE_BOOK'; payload: number }

const BookReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_BOOK':
      const newBook: Book = {
        id: state.books.length + 1,
        title: action.payload.title,
        author: action.payload.author,
        year: action.payload.year
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };
      case 'DELETE_BOOK':
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export default BookReducer;

export const initialState = {
  books: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: '1925'
    },
    {
      id: 2,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: '1925'
    },
    {
      id: 3,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: '1925'
    }

  ]
};
