import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { bookInterface } from '../../modules/interfaces/modelInterfaces';
import BooKCardDetail from './BookCardDetail';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hooks';
import { asyncLoadBookInfo } from '../../modules/redux/contentSlice';

const StyledDivNoContent = styled.div`
  padding: 40px 0;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Span404Value = styled.div`
  margin: auto;
  font-size: 40px;
`;

const Span404Message = styled.div`
  margin: auto;
`;

function Book() {
  const { bookSlug } = useParams<{ bookSlug: string}>();
  const selector = useAppSelector((state) => state.content.book);
  const [book, setBook] = useState<bookInterface | undefined>(undefined);
  const link: string = (bookSlug) ? `${bookSlug}` : '';
  const dispatch = useAppDispatch();
  const roleSelector = useAppSelector((state) => state.auth.role);
  useEffect(() => {
    if (link) {
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
      {
        (roleSelector && roleSelector.role === 2)
          ? <Link to={`/admin/book-edit/${book?.id}`}>admin: edit</Link>
          : ''

      }
      { (book)
        ? <BooKCardDetail book={book} />
        : (
          <StyledDivNoContent>
            <Span404Value>404</Span404Value>
            <Span404Message>Not found</Span404Message>
          </StyledDivNoContent>
        ) }
    </section>
  );
}

export default Book;
