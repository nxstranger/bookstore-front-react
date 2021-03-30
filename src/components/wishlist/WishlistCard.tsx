import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px darkgreen solid;
  margin: 10px;
  padding: 10px;
`;

function WishlistCard() {
  return (
    <Card>
      <span>Cart</span>
      <img src="/src/logo.svg" alt="BookImage" />
      <span>book description</span>
    </Card>
  );
}

export default WishlistCard;
