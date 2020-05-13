import _ from 'lodash';
import React, { useState } from 'react';
import { Spinner, Form, InputGroup, Col } from 'react-bootstrap';

interface Properties {
  query: string,
  setQuery: Function,
  updateData: Function,
  apiCallback: Function
}

function SearchBar({ query, setQuery, updateData, apiCallback }: Properties) {
  const [isWorking, setWorking] = useState(false);
  const [fetchData] = useState(() => _.debounce((value: string) => {
    if (value)
      apiCallback(value).then((res: any) => updateData(res.data));
    else
      updateData(undefined);

    setWorking(false);
  }, 1000));

  return (
    <Form.Row>
      <Form.Group as={Col}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              {isWorking
                ? <Spinner size="sm" animation="border" />
                : <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                </svg>}
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            value={query}
            type="text"
            placeholder="Search Movies by Title..."
            onChange={(e) => (
              setWorking(true), setQuery(e.target.value), fetchData(e.target.value)
            )}
          />
        </InputGroup>
      </Form.Group>
    </Form.Row>
  );
}

export default SearchBar;
