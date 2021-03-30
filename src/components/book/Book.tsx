import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { bookInterface } from '../../modules/interfaces/bookInterface';
import axios from '../../modules/axios/config';
import Gallery from './Gallery';

const Card = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  border: 1px darkgreen solid;
  margin: 10px;
  padding: 10px;
`;

function Book() {
  const { bookSlug, catSlug } = useParams<{ bookSlug: string, catSlug: string}>();
  const [book, setBook] = useState<bookInterface>();
  const [bookImage, setBookImage] = useState<string>('');
  const link: string = (bookSlug) ? `${catSlug}/${bookSlug}` : catSlug || '';

  function getBook() {
    axios.get(`/book/${link}`)
      .then((data) => {
        setBook(data.data);
        console.log(data.data);
        setBookImage(data.data.image);
      });
  }
  useEffect(() => {
    getBook();
  }, [catSlug]);
  return (
    <section>
      <Card>
        Book slug :
        { bookSlug }
        <span>{book?.title}</span>
        <span>{book?.BookAuthor.name}</span>
        <img src={`/media/${bookImage}/Title.jpg`} alt="BookImage" />
        <Gallery img={`/media/${bookImage}/images/${book?.slug}_1.jpg`} />
        <span>{book?.description}</span>
        <span>{book?.price}</span>
      </Card>
    </section>
  );
}

export default Book;
