import React, { useEffect, useState } from 'react';

// eslint-disable-next-line no-unused-vars
import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';
import BookData from './BookData';
// eslint-disable-next-line no-unused-vars
import { asyncLoadBookById } from '../../../modules/redux/adminPanelSlice';
import { bookInterfaceAdmin } from '../../../modules/interfaces/modelInterfaces';

interface bookLinkInterface {
  id: number,
  slug: string,
}

const LinkToBook = (bookSlug: bookLinkInterface) => {
  const { id, slug } = bookSlug;
  const link: string = (id && slug) ? `/book/detail/${id}_${slug}` : '';
  return (
    <div>
      { (link)
        ? <Link to={link}>{link}</Link>
        : <span>book not published</span> }
    </div>
  );
};

const EditBookMain = () => {
  const selector: bookInterfaceAdmin | undefined = useAppSelector((state) => state.adminPanel.book);
  const [bookInfo, setBookInfo] = useState<bookInterfaceAdmin | undefined>(undefined);
  const bookId = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncLoadBookById(bookId.id));
    setBookInfo(selector);
  }, []);
  useEffect(() => {
    console.log('book not found in redux');
    // dispatch(asyncLoadBookById(bookId.id));
    setBookInfo(selector);
  }, [selector]);
  return (
    <div>
      Edit book main
      <br />
      <br />
      { (bookInfo) ? (<BookData book={bookInfo} key={bookInfo.id} />) : 'invalid book id' }
      <br />
      <div>
        { (selector && selector.publish) ? LinkToBook({ id: +selector?.id, slug: selector?.slug }) : ''}
      </div>
    </div>
  );
};

export default EditBookMain;
