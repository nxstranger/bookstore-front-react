import React, { useEffect, useState } from 'react';
import axios from '../../modules/axios/config';
import { bookInterface } from '../../modules/interfaces/modelInterfaces';
import BookCard from '../home/card/BookCard';

export default ({ bookId }: { bookId: number }) => {
  const [bookInfo, setBookInfo] = useState<bookInterface | undefined>(undefined);
  useEffect(() => {
    const getBookData = async () => {
      const req = await axios.get(`/book/id/${bookId}`);
      setBookInfo(req.status === 200 ? req.data : undefined);
    };
    getBookData();
  }, []);
  return (
    bookInfo ? <BookCard bookObj={bookInfo} wished /> : <span>not found</span>
  );
};
