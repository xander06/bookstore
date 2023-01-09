import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { useAppContext } from '../store/Store';
import styles from '../components/book.module.css'

const View = () => {
  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();

 useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, [params,store]);

  if (!item) {
    return (
      <Layout>Item not found</Layout>
    )
  }

  return (
    <Layout>
      <div className={styles.containervw}>
        {item?.cover ? <img src={item?.cover} width="50%" alt={item.title} /> : ''}
          <div className={styles.detalvw}>
          <h1>{item?.title}</h1>
          <div>Autor: {item?.author}</div>
          <div>Introducción: {item?.intro}</div>
          <div>Leido? {item?.completed ? 'Leido' : 'Por terminar'}</div>
          <div>Revision {item?.review}</div>
        </div>
      </div>
    </Layout>
  )
}

export default View