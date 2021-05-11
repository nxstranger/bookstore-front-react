import React from 'react';
import styled from 'styled-components';
import WishlistCard from './WishlistCard';
import { useAppSelector } from '../../modules/redux/hooks';

const WishlistWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  flex-wrap: wrap;
`;

const MyWishlist = styled.div`
  margin: auto;
  padding: 20px 0 20px 20px;
  font-size: 30px;
`;

function Wishlist() {
  const wishlist = useAppSelector((state) => state.wishlist.wishedBooks);
  return (
    <section>
      <MyWishlist>
        My wishlist
      </MyWishlist>
      <WishlistWrapper>
        {
          wishlist && wishlist.length
            ? wishlist.map((obj) => <WishlistCard bookId={obj} key={obj} />)
            : <div>Wishlist is empty</div>
        }
      </WishlistWrapper>
    </section>
  );
}

export default Wishlist;
