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
  const detailLinc = `/categories/${bookObj.Category.slug}/${bookObj.slug}`;
  return (
    <Card>
      <Link to={detailLinc}>
        <span>{bookObj.title}</span>
      </Link>
      <img src="/src/logo.svg" alt="BookImage" />
      <span>{bookObj.description}</span>
    </Card>
  );
}

export default BookCard;
