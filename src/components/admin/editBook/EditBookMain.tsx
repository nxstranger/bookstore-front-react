import React, { useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';
import BookData from './BookData';
import { asyncLoadBookById } from '../../../modules/redux/adminPanelSlice';
import { bookInterfaceAdmin } from '../../../modules/interfaces/bookInterface';

interface bookLinkInterface {
  id?: number,
  slug?: string,
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
  const bookId = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!selector) {
      console.log('book not found in redux');
      dispatch(asyncLoadBookById(bookId.id));
    }
  }, [selector]);
  return (
    <div>
      Edit book main
      <br />
      <br />
      { (selector) ? (<BookData book={selector} key={selector.id} />) : 'invalid book id' }
      <br />
      <div>
        {linkToBook({ id: 1, slug: selector?.slug })}
      </div>
    </div>
  );
};

export default EditBookMain;
