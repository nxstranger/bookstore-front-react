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
import IsAuthWrapper from './components/authWrapper/IsAuthRouteWrapper';
import Logout from './components/auth/Logout/Logout';
import { useAppDispatch, useAppSelector } from './modules/redux/hooks';
import { asyncLoadUserInfo, setJwt } from './modules/redux/authSlice';
import IsAdminRouteWrapper from './components/authWrapper/IsAdminRouteWrapper';
import { asyncLoadAuthors, asyncLoadCategories } from './modules/redux/contentSlice';

const StyledAppWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

function App() {
  const dispatch = useAppDispatch();
  const jwtSelector = useAppSelector((state) => state.auth.authJwt);
  useEffect(() => {
    const token = localStorage.getItem('AccessToken');
    dispatch(asyncLoadCategories());
    dispatch(asyncLoadAuthors());
    if (token) {
      dispatch(asyncLoadUserInfo(token));
      dispatch(setJwt(token));
    } else {
      dispatch(setJwt(''));
    }
    console.log('app use effect');
    console.log(jwtSelector);
  }, [jwtSelector]);
  return (
    <StyledAppWrapper>
      <div className="App">
        <Header />
        <Switch>
          <IsAuthWrapper itTrue exact path="/profile/" component={Profile} />
          <IsAuthWrapper itTrue exact path="/wishlist" component={Wishlist} />
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
