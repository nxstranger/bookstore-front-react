import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bookInterface } from '../../../modules/interfaces/bookInterface';

const Card = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px darkgreen solid;
  margin: 10px;
  padding: 10px;
`;

interface bookProps {
  bookObj: bookInterface;
}

function BookCard({ bookObj }:bookProps) {
  const detailLink = `/book/detail/${bookObj.id}_${bookObj.slug}`;
  const titleImageLink = `/media/${bookObj.media}/Title.jpg`;
  return (
    <Card>
      <Link to={detailLink}>
        <span>{bookObj.title}</span>
      </Link>
      <span>
        {'Author: '}
        { (bookObj.BookAuthor)
          ? bookObj.BookAuthor.name
          : 'undefined'}
      </span>
      <span>
        {'Price: '}
        {bookObj.price}
      </span>
      <img src={titleImageLink} alt="BookImage" />
      <span>{bookObj.description}</span>
    </Card>
  );
}

export default BookCard;
