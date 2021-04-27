import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { bookInterfaceAdmin } from '../../../modules/interfaces/modelInterfaces';
import { asyncLoadUnpublishedBooks } from '../../../modules/redux/adminPanelSlice';
import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';
import UnpublishedBooks from './UnpublishedBooks';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  //border: 1px solid gray;
`;

export default ({ token }: { token: string }) => {
  const dispatch = useAppDispatch();
  const selectorUnpublished = useAppSelector((state) => state.adminPanel.unpublishedBooks);
  const [unpublishedBooks, setBooks] = useState<bookInterfaceAdmin[]>([]);
  useEffect(() => {
    dispatch(asyncLoadUnpublishedBooks(token));
  }, []);
  useEffect(() => {
    setBooks(selectorUnpublished);
  }, [selectorUnpublished]);
  return (
    <Wrapper>
      <UnpublishedBooks books={unpublishedBooks} />
    </Wrapper>
  );
};
