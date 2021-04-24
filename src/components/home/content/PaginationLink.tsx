import React from 'react';
import qs from 'querystring';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #777;
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
  active?: boolean,
  objParams: {
    value?: number,
    edge?: string,
  }
}

export default (linkProp: paginationLinkInterface) => {
  let text = '';
  const { objParams } = linkProp;
  const location = useLocation();
  const { value, edge } = objParams;
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
      case 'start': text = '<='; break;
      case 'end': text = '=>'; break;
      default:
        break;
    }
  } else {
    text = `${value}`;
  }
  return (
    <Wrapper>
      <Link to={link}>
        {text}
      </Link>
    </Wrapper>
  );
};
