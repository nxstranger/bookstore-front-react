import React from 'react';
import { useParams } from 'react-router-dom';
import Basic from './ProfileEditForm';

function Profile() {
  const { id } = useParams<{id: string}>();
  return (
    <section>
      Profile ID :
      { id }
      <Basic />
    </section>
  );
}

export default Profile;
