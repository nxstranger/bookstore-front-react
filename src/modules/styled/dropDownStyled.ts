import styled from 'styled-components';

export const StyledUl = styled.ul`
  padding: 0;
  list-style-type: none;
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
    width: auto;
  }
  li:hover{
    background-color: #eee;
  }
`;

export const DropdownInput = styled.input`
  width: auto;
  box-sizing: content-box;
  outline: none;
`;

export const DropdownLabel = styled.label`
  width: auto;
  box-sizing: content-box;
`;

export const StyledSelector = styled.select`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: gray;
  width: ${(p: { width?: number }) => (p.width ? p.width : 100)}px;
  padding: 0 0 0 10px;
  max-width: 100%; 
  margin: 0;
  
  border: none;
  box-shadow: none;
  
  outline: white;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: white;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position: right 10px top 50%, 0 0;
  background-size: 10px auto, 100%;
`;

export const StyledOption = styled.option`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: gray;
  
  &:hover, &:focus {
    color: gray;
  }
`;
