import React from 'react'
import Book from "../components/Book";
import { useAppContext } from "../store/Store";

const Homepage = () => {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  return (
    
      <div style={booksContainer}>
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    
  );
}

export default Homepage