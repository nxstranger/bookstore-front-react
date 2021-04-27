import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../modules/redux/hooks';
import CreateAuthorForm from './CreateAuthorForm';

const Styled = styled.div`
  height: 160px;
  padding: 20px;
  color: gray;
`;

export default () => {
  const text = 'Create';
  const jwt = useAppSelector((state) => state.auth.authJwt);
  return (
    <Styled>
      {text}
      <CreateAuthorForm jwt={jwt} />
    </Styled>
  );
};
