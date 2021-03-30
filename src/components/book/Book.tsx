import React from 'react';
import { useParams } from 'react-router-dom';

function Book() {
  const { slug } = useParams<{slug: string}>();

  return (
    <section>
      Book id :
      { slug }
    </section>
  );
}

export default Book;
