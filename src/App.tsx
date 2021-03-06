import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Wishlist from './components/wishlist/Wishlist';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Book from './components/book/Book';
import Login from './components/auth/login/Login';
import Registration from './components/auth/registration/Registration';
import AdminPanel from './components/admin/AdminPanel';
import CreateBookMain from './components/admin/createBook/CreateBookMain';
import EditBookMain from './components/admin/editBook/EditBookMain';
import IsAuthWrapper from './components/auth/authWrapper/IsAuthRouteWrapper';
import Logout from './components/auth/logout/Logout';
import CartWrapper from './components/cart/CartWrapper';
import { useAppDispatch, useAppSelector } from './modules/redux/hooks';
import { asyncLoadUserInfo, asyncLoadUserRole, setJwt } from './modules/redux/authSlice';
import IsAdminRouteWrapper from './components/auth/authWrapper/IsAdminRouteWrapper';
import { asyncLoadAuthors, asyncLoadCategories } from './modules/redux/contentSlice';
import { asyncLoadCart } from './modules/redux/cartSlice';
import { asyncLoadWishlist } from './modules/redux/wishlistSlice';

const StyledAppWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  min-width: 768px;
  padding: 0 20px;
`;

function App() {
  const dispatch = useAppDispatch();
  const jwtSelector = useAppSelector((state) => state.auth.authJwt);
  const wishlist = useAppSelector((state) => state.wishlist.wishedBooks);
  useEffect(() => {
    dispatch(asyncLoadCategories());
    dispatch(asyncLoadAuthors());
  }, []);
  useEffect(() => {
    dispatch(asyncLoadWishlist());
    const token = localStorage.getItem('AccessToken');
    if (token) {
      dispatch(asyncLoadUserInfo(token));
      dispatch(asyncLoadUserRole(token));
      dispatch(asyncLoadCart(token));
      dispatch(setJwt(token));
    } else {
      dispatch(setJwt(''));
    }
  }, [jwtSelector]);
  useEffect(() => {
    localStorage.setItem('Wishlist', JSON.stringify(wishlist));
  }, [wishlist]);
  return (
    <StyledAppWrapper>
      <div className="App">
        <Header />
        <Switch>
          <IsAuthWrapper itTrue exact path="/profile/" component={Profile} />
          <IsAuthWrapper itTrue exact path="/cart/" component={CartWrapper} />
          <Route exact path="/wishlist" component={Wishlist} />
          <IsAdminRouteWrapper itTrue exact path="/admin" component={AdminPanel} />
          <IsAdminRouteWrapper itTrue exact path="/admin/create-book" component={CreateBookMain} />
          <IsAdminRouteWrapper itTrue exact path="/admin/book-edit/:id" component={EditBookMain} />
          <IsAuthWrapper itTrue={false} exact path="/auth/login" component={Login} />
          <IsAuthWrapper itTrue exact path="/auth/logout" component={Logout} />
          <IsAuthWrapper itTrue={false} exact path="/auth/registration" component={Registration} />
          <Route exact path="/book/detail/:bookSlug" component={Book} />
          <Route exact path="/book/category/:catSlug" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </StyledAppWrapper>
  );
}

export default App;
