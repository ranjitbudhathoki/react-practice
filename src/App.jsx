const imageLink =
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg";

const initialBooks = [
  {
    name: "The Alchemist",
    summary:
      "A novel by Paulo Coelho about a shepherd named Santiago who goes on a journey to find his personal legend.",
    author: "Paulo Coelho",
    read: true,
    image: imageLink,
  },
  {
    name: "To Kill a Mockingbird",
    summary:
      "A classic novel by Harper Lee set in the American South during the Great Depression, dealing with issues of racism and moral growth.",
    author: "Harper Lee",
    read: true,
    image: imageLink,
  },
  {
    name: "Pride and Prejudice",
    summary:
      "A romantic novel by Jane Austen, following the life of Elizabeth Bennet as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency.",
    author: "Jane Austen",
    read: false,
    image: imageLink,
  },
  {
    name: "The Great Gatsby",
    summary:
      "A novel by F. Scott Fitzgerald set during the Roaring Twenties, depicting the decadence and moral decay of the American Dream.",
    author: "F. Scott Fitzgerald",
    read: true,
    image: imageLink,
  },
  {
    name: "1984",
    summary:
      "A dystopian novel by George Orwell depicting a totalitarian society where independent thinking is persecuted.",
    author: "George Orwell",
    read: false,
    image: imageLink,
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    summary:
      "The first book in the Harry Potter series, where a young wizard named Harry Potter begins his journey at Hogwarts School of Witchcraft and Wizardry.",
    author: "J.K. Rowling",
    read: true,
    image: imageLink,
  },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    summary:
      "The first book in J.R.R. Tolkien's epic fantasy series, following the quest to destroy the One Ring to prevent the Dark Lord Sauron from ruling the world.",
    author: "J.R.R. Tolkien",
    read: false,
    image: imageLink,
  },
  {
    name: "The Catcher in the Rye",
    summary:
      "A coming-of-age novel by J.D. Salinger, following the story of Holden Caulfield's experiences in New York City after being expelled from boarding school.",
    author: "J.D. Salinger",
    read: true,
    image: imageLink,
  },
  {
    name: "The Hobbit",
    summary:
      "A fantasy novel by J.R.R. Tolkien, narrating the adventures of Bilbo Baggins, a hobbit who embarks on a journey to help a group of dwarves reclaim their homeland from the dragon Smaug.",
    author: "J.R.R. Tolkien",
    read: false,
    image: imageLink,
  },
  {
    name: "Brave New World",
    summary:
      "A dystopian novel by Aldous Huxley, presenting a vision of a future society where people are genetically engineered and conditioned to be compliant.",
    author: "Aldous Huxley",
    read: true,
    image: imageLink,
  },
];
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />

      <Books />
    </div>
  );
}

function Books() {
  return (
    <>
      <h2>Books</h2>
      <ul className="books">
        {initialBooks.map((book) => (
          <li key={book.name} className="book">
            <img src={book.image} alt={book.name} />
            <div>
              <h3>{book.name}</h3>
              <p>{book.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
