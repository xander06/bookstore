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
        <div>
          <div>{item?.cover ? <img src={item?.cover} width="400" alt={item.title} /> : ''}</div>
        </div>
        <div className={styles.detalvw}>
          <h2>{item?.title}</h2>
          <div>{item?.author}</div>
          <div>{item?.intro}</div>
          <div>{item?.completed ? 'Leido' : 'Por terminar'}</div>
          <div>{item?.review}</div>
        </div>
      </div>
    </Layout>
  )
}

export default View