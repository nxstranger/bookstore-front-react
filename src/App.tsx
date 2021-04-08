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
import AdminPanel from './components/admin/AdminPanel';
import CreateBookMain from './components/admin/createBook/CreateBookMain';
import EditBookMain from './components/admin/editBook/EditBookMain';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/admin" component={AdminPanel} />
        <Route exact path="/admin/create-book" component={CreateBookMain} />
        <Route exact path="/admin/book-edit/:id" component={EditBookMain} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/registration" component={Registration} />
        <Route exact path="/book/slug/:catSlug/:bookSlug" component={Book} />
        <Route exact path="/book/:catSlug" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
