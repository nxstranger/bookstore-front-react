import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../modules/redux/hooks';
import DeleteAuthorForm from './DeleteAuthorForm';

const Styled = styled.div`
  height: 100px;
  padding: 20px;
  color: gray;
`;

export default () => {
  const text = 'Delete';
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const authorsState = useAppSelector((state) => state.content.authors);
  return (
    <Styled>
      {text}
      {
        authorsState.length
          ? <DeleteAuthorForm authors={authorsState} jwt={jwt} />
          : <span>No have authors</span>
      }
    </Styled>
  );
};
