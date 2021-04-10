import React, { useState } from 'react';
import { DropdownInput, DropdownLabel } from '../../../../modules/styled/dropDownStyled';
import AuthorInputHelper from './AuthorInputHelper';

const AuthorInput = () => {
  const [visibility, changeVisibility] = useState<boolean>(true);
  const [fieldValue, setFieldValue] = useState<string>('');
  return (
    <DropdownLabel htmlFor="author-input">
      <DropdownInput
        placeholder="author"
        id="author-input"
        onChange={(e: any) => setFieldValue(e.target.value)}
        onBlur={() => setTimeout(() => changeVisibility(false), 300)}
        onFocus={() => changeVisibility(true)}
      />
      {
        (fieldValue.length > 2 && visibility)
          ? <AuthorInputHelper search={fieldValue} />
          : ''
      }
    </DropdownLabel>
  );
};

export default AuthorInput;
