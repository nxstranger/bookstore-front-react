import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bookInterface } from '../../../modules/interfaces/bookInterface';

const Card = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px;
  //border: 1px darkgreen solid;
`;
const BookImageStyled = styled.img`
  width: 150px;
  object-fit: cover;
  align-self: center;
`;

const WishlistAddStyledDiv = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: gray;
`;

const ButtonStyledAddToCart = styled.button`
  border: none;
  background: #f64444;
  mso-border-shadow: ;
`;

const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface bookProps {
  bookObj: bookInterface;
}

function BookCard({ bookObj }:bookProps) {
  const detailLink = `/book/detail/${bookObj.id}_${bookObj.slug}`;
  const titleImageLink = `http://localhost:8080/${bookObj.media}/${bookObj.BookImages[0].name}_small.jpg`;
  return (
    <Card>
      <Link to={detailLink}>
        <BookImageStyled src={titleImageLink} alt="BookImage" />
        <span>
          { (bookObj.BookAuthor)
            ? bookObj.BookAuthor.name
            : 'undefined'}
        </span>
        <span>{bookObj.title}</span>
        <span>
          {'Price: '}
          {bookObj.price}
        </span>
      </Link>
      <DivFlexRow>
        <ButtonStyledAddToCart type="button">Add to cart</ButtonStyledAddToCart>
        <WishlistAddStyledDiv>WL</WishlistAddStyledDiv>
      </DivFlexRow>
    </Card>
  );
}

export default BookCard;
