import React from 'react';
import { Placeholder, Table } from 'react-bootstrap';

export default function TablePlaceholder() {
  return (
    <Table responsive>
      <caption className="visually-hidden">Caricando...</caption>
      <Placeholder as="thead" animation="wave">
        <tr>
          {React.Children.toArray(
            Array.from({ length: 3 }, () => (
              <th scope="col">
                <Placeholder xs={4} size="lg" />
              </th>
            )),
          )}
        </tr>
      </Placeholder>
      <Placeholder as="tbody" animation="glow">
        {React.Children.toArray(
          Array.from({ length: 3 }, () => (
            <tr>
              <td>
                <Placeholder xs={8} />
              </td>
              <td>
                <Placeholder xs={10} />
              </td>
              <td>
                <Placeholder xs={12} />
              </td>
            </tr>
          )),
        )}
      </Placeholder>
    </Table>
  );
}
