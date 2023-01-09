import React from 'react';
import { Link } from 'react-router-dom';
import styles from './book.module.css';
const Book = ({item}) => {

  return (
    <div className={styles.bookContainerStyle} >
        <Link className={styles.bookInfoStyle} to={`/view/${item.id}`}>
            <img src={item.cover} alt={item.title} width = "200px" />
            <div>{item.title}</div>
        </Link>
    </div>
  )
}

export default Book