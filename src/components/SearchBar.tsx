import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchBar() {
  return (
    <div>
        <Form>
            <Form.Control type="text" placeholder="Input Movie" />   <Button variant="primary" type="submit"> Submit</Button>
        </Form>
    </div>
  );
}

export default SearchBar;
