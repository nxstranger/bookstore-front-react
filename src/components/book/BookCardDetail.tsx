import React from 'react';
import styled from 'styled-components';
import { bookInterface } from '../../modules/interfaces/bookInterface';
import Gallery from './Gallery';

interface BookDetail {
  book: bookInterface
}
const Card = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  border: 1px darkgreen solid;
  margin: 10px;
  padding: 10px;
`;

const BooKCardDetail = (props: BookDetail) => {
  const { book } = props;
  return (
    <Card>
      <span>{book?.title}</span>
      <span>{(book?.BookAuthor) ? book?.BookAuthor.name : 'author: undefined'}</span>
      <img src={`/media/${book.media}/Title.jpg`} alt="BookImage" />
      <Gallery img={`/media/${book.media}/images/${book?.slug}_1.jpg`} />
      <span>{book?.description}</span>
      <span>
        {'price: '}
        {book?.price}
      </span>
    </Card>
  );
};
export default BooKCardDetail;
