import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';
import BookData from './BookData';
import { asyncLoadBookById } from '../../../modules/redux/adminPanelSlice';
import { bookInterfaceAdmin } from '../../../modules/interfaces/bookInterface';

const EditBookMain = () => {
  const lolo = 'lolo';
  console.log(lolo);
  const selector: bookInterfaceAdmin | undefined = useAppSelector((state) => state.adminPanel.book);
  const bookId = useParams<{ id: string }>();
  console.log(bookId);
  const dispatch = useAppDispatch();
  console.log('selector body');
  console.log(selector);
  useEffect(() => {
    if (!selector) {
      console.log('book not found in redux');
      dispatch(asyncLoadBookById(bookId.id));
    }
  }, [selector]);
  return (
    <div>
      Edit book main
      {(selector) ? <BookData book={selector} key={selector.id} /> : 'invalid book id'}
    </div>
  );
};

export default EditBookMain;
