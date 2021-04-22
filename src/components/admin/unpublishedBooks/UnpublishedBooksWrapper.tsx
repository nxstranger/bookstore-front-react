import React, { useEffect, useState } from 'react';
import { bookInterfaceAdmin } from '../../../modules/interfaces/modelInterfaces';
import { asyncLoadUnpublishedBooks } from '../../../modules/redux/adminPanelSlice';
import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';
import UnpublishedBooks from './UnpublishedBooks';

const UnpublishedBooksWrapper = ({ token }: { token: string }) => {
  const dispatch = useAppDispatch();
  const selectorUnpublished = useAppSelector((state) => state.adminPanel.unpublishedBooks);
  const [unpublishedBooks, setBooks] = useState<bookInterfaceAdmin[]>([]);
  useEffect(() => {
    dispatch(asyncLoadUnpublishedBooks(token));
  }, []);
  useEffect(() => {
    setBooks(selectorUnpublished);
  }, [selectorUnpublished]);
  return (
    <UnpublishedBooks books={unpublishedBooks} />
  );
};

export default UnpublishedBooksWrapper;
