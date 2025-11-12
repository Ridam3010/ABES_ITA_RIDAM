import React, { useEffect, useState } from 'react'
import Fashion from './Component/Fashion.jsx';
import './App.css';
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
      });
  }, []);

  return (
    <div id="adi">
      {books.map((b, i) => (
        <Fashion key={i} props={b} />
      ))}
    </div>
  );
}

export default App;
