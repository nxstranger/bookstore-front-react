import React from 'react';
import qs from 'querystring';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`

  a, a:link {
    color: ${(p: {current: boolean}) => (p.current ? 'white' : 'black')};
    text-decoration: none;
  }
`;

const StyledLink = styled.div`
  background: ${(p: {current: boolean}) => (p.current ? '#999' : '#ccc')};
  border-radius: 20%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
  color: ${(p: {current: boolean}) => (p.current ? 'white' : 'black')};
  margin: 0 3px;
`;

interface paginationLinkInterface {
  active?: boolean,
  objParams: {
    value?: number,
    edge?: string,
  }
}

export default (linkProp: paginationLinkInterface) => {
  let text = '';
  const {
    objParams,
    active,
  } = linkProp;
  const location = useLocation();
  const {
    value,
    edge,
  } = objParams;
  let link = '';
  const queryString = useLocation().search;
  if (queryString) {
    const parsedQuery = qs.parse(queryString.substring(1));
    parsedQuery.page = `${value}`;
    const linkQuery = qs.stringify(parsedQuery);
    link = `${location.pathname}?${linkQuery}`;
  } else {
    link = `${location.pathname}?page=${value}`;
  }
  if (edge) {
    switch (edge) {
      case 'start':
        text = '<';
        break;
      case 'end':
        text = '>';
        break;
      default:
        break;
    }
  } else {
    text = `${value}`;
  }
  return (
    <Wrapper current={(active) || false}>
      <Link to={link}>
        <StyledLink current={(active) || false}>
          {text}
        </StyledLink>
      </Link>
    </Wrapper>
  );
};
