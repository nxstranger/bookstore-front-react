import React, { useEffect, useState } from 'react';

// eslint-disable-next-line no-unused-vars
import { useParams, Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';
import BookData from './BookData';
// eslint-disable-next-line no-unused-vars
import { asyncLoadBookById, asyncLoadImagesBookId } from '../../../modules/redux/adminPanelSlice';
import { bookInterfaceAdmin } from '../../../modules/interfaces/bookInterface';

interface bookLinkInterface {
  id: number,
  slug: string,
}

const linkToBook = (bookSlug: bookLinkInterface) => {
  const link: string = (bookSlug.id && bookSlug.slug) ? `/book/id/${bookSlug.id}_${bookSlug.slug}` : '';
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
        { (selector && selector.publish) ? linkToBook({ id: +selector?.id, slug: selector?.slug }) : ''}
      </div>
    </div>
  );
};

export default EditBookMain;
