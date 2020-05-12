import React from 'react';
import Table from 'react-bootstrap/Table';

function MovieList() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Title</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td>Lost In Translation</td>
          <td>10</td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td>Fargo</td>
          <td>10</td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td>Casino</td>
          <td>2</td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td>Falling Down</td>
          <td>9</td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td>The Thing</td>
          <td>10</td>
        </tr>

      </tbody>
    </Table>
  );
}

export default MovieList;
