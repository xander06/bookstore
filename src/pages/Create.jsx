import React, { useState } from 'react'
import { useAppContext } from '../store/Store';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import styles from '../components/book.module.css';

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    const [intro, setIntro] = useState('');
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState('');

    const store = useAppContext();
    const navigate = useNavigate();

    
 

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'author':
                setAuthor(value);
                break;
            case 'intro':
                setIntro(value);
                break;
            case 'completed':
                setCompleted(e.target.checked);
                break;
            case 'review':
                setReview(value);
                break;

            default:
                break;
        }
    }

    function handleFile(e) {
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function () {
            setCover(reader.result.toString())
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review,
        };
        //TODO para crear
        store.createItem(newBook);
        navigate("/")
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit} className={styles.formContainerC} >
                <div className= {styles.container}>
                    <div className={styles.title} >Title</div>
                    <input className={styles.input} type='text' name='title' onChange={handleChange} value={title} />
                </div>
                <div className= {styles.container}>
                    <div className={styles.title}>Author</div>
                    <input className={styles.input} type='text' name='author' onChange={handleChange} value={author} />
                </div>
                <div className= {styles.container} >
                    <div className={styles.title} >Cover</div>
                    <input className={styles.input} type='file' name='cover' onChange={handleFile} />
                    <div>{!!cover ? <img src={cover} width='200' alt='preview' /> : ''}</div>
                </div>
                <div className= {styles.container} >
                    <div className={styles.title} >Introduction</div>
                    <input className={styles.input} type='text' name='intro' onChange={handleChange} value={intro} />
                </div>
                <div className='completed' >
                    <div className={styles.title}>Completed</div>
                    <input
                        className='check'
                        type='checkbox'
                        name='completed'
                        onChange={handleChange}
                        value={completed} />
                </div>
                <div className={styles.container}>
                    <div className={styles.title} >Review</div>
                    <input className={styles.input} type='text' name='review' onChange={handleChange} value={review} />
                </div>

                <input
                    className={styles.buttonStyle}
                    type="submit"
                    value="Register Book" />
            </form>
        </Layout>
    )
}

export default Create