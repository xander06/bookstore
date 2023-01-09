import React from 'react'
import Book from "../components/Book";
import { useAppContext } from "../store/Store";
import Layout from "../components/Layout";
import styles from '../components/book.module.css'

const Homepage = () => {
  const store = useAppContext();


  return (
    <Layout>
      <div className={styles.booksContainer} >
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  )
}

export default Homepage