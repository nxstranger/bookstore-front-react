import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  width: 25%;
  @media (max-width: 1199px) {
  width: 33%;
  }
  @media (max-width: 999px) {
    width: 50%;
  }
  min-width: 198px;
`;

export const StyledCard = styled.div`
  width: 198px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 20px;
  margin: 0 0 40px 0;
  
  a, a:link {
    text-decoration: none
  }
`;

export const StyledDivForImage = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

export const BookImageStyled = styled.img`
  width: 150px;
  max-height: 200px;
  object-fit: cover;
  align-self: center;
`;

export const WishlistAddStyledDiv = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  font-weight: 700;
  color: #464e5e;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  background: white center/60% url("http://localhost:3000/icons/heart.svg") no-repeat;
`;

export const ButtonStyledAddToCart = styled.button`
  border: none;
  width: 120px;
  background: #f64444;
  font-size: 18px;
  box-shadow: 0 0 2px #f64444;
`;

export const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DivBookInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const AuthorSpan = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  margin-bottom: 5px;
`;

export const BookNameSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: #282c34;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const BookPriceSpan = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: red;
`;
