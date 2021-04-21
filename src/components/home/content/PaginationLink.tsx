import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #aaa;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  user-select: none;
  color: white;
  margin: 0 3px;
  a, a:link {
    color: white;
    text-decoration: none;
  }
`;

interface paginationLinkInterface {
  value?: number,
  edge?: string,
}

export default (linkProp: paginationLinkInterface) => {
  let text = '';
  const { catSlug } = useParams<{ catSlug: string }>();
  const { value, edge } = linkProp;
  console.log(catSlug);
  const link = catSlug ? `/book/category/${catSlug}/?page=${value}` : `/?page=${value}`;
  if (edge) {
    switch (edge) {
      case 'start': text = '<='; break;
      case 'end': text = '=>'; break;
      case 'center': text = '...'; break;
      default:
        break;
    }
  } else {
    text = `${value}`;
  }
  return (
    <Wrapper>
      { edge !== 'center'
        ? (
          <Link to={link}>
            {text}
          </Link>
        )
        : text }
    </Wrapper>
  );
};
