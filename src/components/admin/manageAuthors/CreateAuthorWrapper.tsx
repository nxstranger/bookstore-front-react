import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../modules/redux/hooks';
import CreateAuthorForm from './CreateAuthorForm';

const Styled = styled.div`
padding: 20px;
  border: 1px solid gray;
`;

export default () => {
  const text = '';
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const authors = useAppSelector((state) => state.content.authors);
  return (
    <Styled>
      {text}
      <CreateAuthorForm authors={authors} jwt={jwt} />
    </Styled>
  );
};
