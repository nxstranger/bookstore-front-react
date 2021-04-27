import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bookInterface } from '../../modules/interfaces/modelInterfaces';

interface bookOrderInterface {
  Book: bookInterface
  count: number,
}

const StyledTitle = styled.div`
  margin-right: 20px;
  margin-top: 5px;
  width: 200px;
  a {
    color: gray;
    text-decoration: none;
  }
  a:hover {
    color: black;
  }
`;

const StyledPriceSpan = styled.span`
`;

const StyledLi = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  user-select: none;
`;

export default (bookObj: bookOrderInterface) => {
  const { Book: book, count } = bookObj;
  const detailLink = `/book/detail/${book.id}_${book.slug}`;
  return (
    <StyledLi>
      <StyledTitle>
        <Link to={detailLink}>
          {book.title}
        </Link>
      </StyledTitle>
      <StyledPriceSpan>
        {count}
      </StyledPriceSpan>
    </StyledLi>
  );
};
