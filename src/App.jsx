import Card from './components/card'

const App = () => {
  const books = [
  {
    id: 1,
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Romantic Fiction",
    rating: 4.7,
    price:'399/-',
    category: "Romantic",
    description: "A heartbreaking yet beautiful love story between two teens battling illness.",
    img: "https://cdn.penguin.co.in/wp-content/uploads/2023/06/9780141355078.jpg"
  },
  {
    id: 2,
    title: "It Ends With Us",
    author: "Colleen Hoover",
    genre: "Romance, Drama",
    rating: 4.6,
    price: "499/-",
    category: "Romantic",
    description: "An emotional love story exploring choices, relationships, and self-worth.",
    img: "https://covers.openlibrary.org/b/id/12640332-L.jpg"
  },
  {
    id: 3,
    title: "Harry Potter and the Sorcerer’s Stone",
    author: "J.K. Rowling",
    genre: "Fantasy, Magic",
    rating: 4.9,
    price:" 550/-",
    category: "Magical",
    description: "The magical journey of Harry Potter begins as he discovers Hogwarts School.",
    img: "https://covers.openlibrary.org/b/id/7888789-L.jpg"
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure, Fiction",
    rating: 4.8,
    price:" 350/-",
    category: "Fictional",
    description: "A magical and philosophical journey of a shepherd chasing his dreams.",
    img: "https://covers.openlibrary.org/b/id/8100920-L.jpg"
  },
  {
    id: 5,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery, Thriller",
    rating: 4.7,
    price: "450/-",
    category: "Suspense",
    description: "A symbologist uncovers secrets hidden in art, history, and religious mysteries.",
    img: "https://covers.openlibrary.org/b/id/240726-L.jpg"
  },
  {
    id: 6,
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "Psychological Thriller",
    rating: 4.6,
    price: "420/-",
    category: "Suspense",
    description: "A dark and twisty story of a missing wife and a husband under suspicion.",
    img: "https://covers.openlibrary.org/b/id/8231851-L.jpg"
  },
  {
    id: 7,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Action, Dystopian",
    rating: 4.8,
    price: "499/-",
    category: "Action",
    description: "A thrilling fight for survival in a dangerous, oppressive dystopian world.",
    img: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
  },
  {
    id: 8,
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    genre: "Fantasy Romance",
    rating: 4.8,
    price: "599/-",
    category: "Magical",
    description: "A romantic and magical fantasy adventure inspired by Beauty and the Beast.",
    img: "https://covers.openlibrary.org/b/id/11153203-L.jpg"
  },
  {
    id: 9,
    title: "Verity",
    author: "Colleen Hoover",
    genre: "Thriller, Suspense",
    rating: 4.7,
    price: "450/-",
    category: "Suspense",
    description: "A chilling psychological thriller that keeps you guessing till the end.",
    img: "https://covers.openlibrary.org/b/id/12634223-L.jpg"
  },
  {
    id: 10,
    title: "Six of Crows",
    author: "Leigh Bardugo",
    genre: "Fantasy, Action",
    rating: 4.9,
    price: "620/-",
    category: "Magical",
    description: "A magical heist story full of action, dark secrets, and dangerous missions.",
    img: "https://covers.openlibrary.org/b/id/11153222-L.jpg"
  }
  ];

  
  return (
    
    <div className="layout">
      <nav className="navbar">
        <div className='logo'>
        <span><img src="data:image/png;base64,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" alt="" /></span>
        <h1>LIBRARY</h1>
        </div>


   <input type="text" placeholder="search" />

        <div className="navkey">
          <h3>Home</h3>
          <h3>Category</h3>
          <h3>Favourite</h3>
          <h3>Login</h3>
        </div>
         
      </nav>
      <nav className='greet'>
       <div> <h1>🙏🏻  WELCOME TO THE LIBRARY  🙏🏻</h1></div>
      </nav>

<div className='parent'>
{
    books.map(function (elem) {
        return <div key={elem.id}><Card head={elem.title} price={elem.price} author={elem.author} category={elem.category} description={elem.description} rating={elem.rating} img={elem.img} /> </div>
      })}

      
  
      </div>
      </div>
  )
}

export default App
