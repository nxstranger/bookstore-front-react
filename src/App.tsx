import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Wishlist from './components/wishlist/Wishlist';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Book from './components/book/Book';
import Login from './components/auth/login/Login';
import Registration from './components/auth/registration/Registration';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/profile/:id" component={Profile} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/registration" component={Registration} />
        <Route exact path="/book/:catSlug/:bookSlug" component={Book} />
        <Route exact path="/book/:catSlug" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
