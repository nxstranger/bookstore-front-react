import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { bookInterface } from '../../modules/interfaces/bookInterface';
import axios from '../../modules/axios/config';
import BooKCardDetail from './BookCardDetail';

function Book() {
  const { bookSlug, catSlug } = useParams<{ bookSlug: string, catSlug: string}>();
  const [book, setBook] = useState<bookInterface>();
  const link: string = (bookSlug) ? `${bookSlug}` : '';
  console.log('link');
  console.log(link);
  console.log('tick book');
  console.log('book');
  console.log(book);
  function getBook() {
    axios.get(`/book/detail/${link}`)
      .then((data) => {
        if (data.data) {
          setBook(data.data);
          console.log(data.data);
        }
      });
  }
  useEffect(() => {
    getBook();
  }, [catSlug]);
  return (
    <section>
      <Link to={`/admin/book-edit/${book?.id}`}>edit</Link>
      { (book)
        ? <BooKCardDetail book={book} />
        : 'book not found' }
    </section>
  );
}

export default Book;
