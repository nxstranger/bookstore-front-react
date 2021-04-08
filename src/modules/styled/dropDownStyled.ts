import styled from 'styled-components';

export const StyledUl = styled.ul`
  padding: 0;
  list-style-type: none;
  //display: none;
  position: absolute;
  z-index: 9999;
  background: #fff;
  width: auto;
  margin-top: 0;
  max-height: 120px;
  overflow: hidden;
  overflow-y: scroll;
  li {
    text-align: left;
    padding: 5px;
    //display: none;
    width: auto;
  }
  li:hover{
    background-color: #eee;
  }
`;

export const DropdownInput = styled.input`
  width: auto;
  box-sizing: content-box;
`;

export const DropdownLabel = styled.label`
  width: auto;
  box-sizing: content-box;
`;
