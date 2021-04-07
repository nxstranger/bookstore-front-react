import React, { useEffect, useState } from 'react';
import axios from '../../../modules/axios/config';
import { AuthorInterface } from '../../../modules/interfaces/authorInterface';

interface helperProps {
  search: string
}

const AuthorInputHelper = (props: helperProps) => {
  const { search } = props;
  const [textField, setTextField] = useState<AuthorInterface[]>([]);
  console.log('tick AuthorInputHelper');
  console.log(search);
  useEffect(() => {
    axios.get(`/author/search/${search}`)
      .then((data) => {
        setTextField([]);
        if (data.status === 200) {
          setTextField(data.data);
        }
      })
      .catch(() => setTextField([]));
  }, [search]);
  return (
    <div>
      <ul>
        {textField.map((obj) => <li key={obj.id}>{obj.name}</li>)}
      </ul>
    </div>
  );
};

export default AuthorInputHelper;
