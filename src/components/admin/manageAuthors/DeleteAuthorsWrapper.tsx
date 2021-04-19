/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../modules/redux/hooks';
import DeleteAuthorForm from './DeleteAuthorForm';
import { authorInterface } from '../../../modules/interfaces/authorInterface';

const Styled = styled.div`
padding: 20px;
  border: 1px solid gray;
`;

export default () => {
  const text = '';
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const authorsState = useAppSelector((state) => state.content.authors);
  const [authors, setAuthors] = useState<authorInterface[]>([]);
  useEffect(() => {
    setAuthors(authorsState);
  }, [authorsState]);
  return (
    <Styled>
      {text}
      <DeleteAuthorForm authors={authorsState} jwt={jwt} />
    </Styled>
  );
};
