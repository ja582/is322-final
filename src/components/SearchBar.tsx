import React from 'react';
import { Form } from 'react-bootstrap';

interface Properties {
  value: string,
  setValue: Function
}

function SearchBar({ value, setValue }: Properties) {
  return (
    <Form.Control
      value={value}
      type="text"
      placeholder="Input Movie"
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default SearchBar;
