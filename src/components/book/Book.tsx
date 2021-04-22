import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { bookInterface } from '../../modules/interfaces/modelInterfaces';
import BooKCardDetail from './BookCardDetail';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hooks';
import { asyncLoadBookInfo } from '../../modules/redux/contentSlice';

function Book() {
  const { bookSlug } = useParams<{ bookSlug: string}>();
  const selector = useAppSelector((state) => state.content.book);
  const [book, setBook] = useState<bookInterface | undefined>(undefined);
  const link: string = (bookSlug) ? `${bookSlug}` : '';
  const dispatch = useAppDispatch();
  console.log('book');
  console.log(book);
  useEffect(() => {
    if (link) {
      console.log('use effect asyncLoadBookInfo');
      dispatch(asyncLoadBookInfo(link));
      setBook(selector);
    }
  }, []);
  useEffect(() => {
    if (link) {
      setBook(selector);
    }
  }, [selector]);
  return (
    <section>
      <Link to={`/admin/book-edit/${book?.id}`}>admin: edit</Link>
      { (book)
        ? <BooKCardDetail book={book} />
        : 'book not found' }
    </section>
  );
}

export default Book;
