import './App.css';
import firebase from './firebase'
import { useEffect, useState } from 'react';





function App() {
  const [books, setBooks] = useState([]);
  const [userInput, setUserInput] = useState([]);


  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();

    // here we will grab the userInput and push it to Firebase
    dbRef.push(userInput);
    setUserInput('');

  }

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push({ key: key, name: data[key] });
      }
      setBooks(newState);
    });
  }, [])

  console.log(books);

  return (
    <div className="App">
      <ul>
        {
          books.map(value => {
            return <li>{value.name}
              <button>Delete</button>
            </li>
          })
        }
      </ul>
      <form action="">
        <label htmlFor="newBook">Add a book to your bookshelf </label>
        <input type="text" id="newBook" onChange={handleChange} value={userInput} />

        <button onClick={handleClick}>Add Book</button>
      </form>
    </div>
  );
}

export default App;
