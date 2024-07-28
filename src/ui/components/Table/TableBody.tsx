import { Table, flexRender } from '@tanstack/react-table';
import { Children } from 'react';

export default function TableBody<T>({ table }: { table: Table<T> }) {
  return (
    <tbody className="table-group-divider">
      {Children.toArray(
        table
          .getRowModel()
          .rows.map((row) => (
            <tr>
              {Children.toArray(
                row
                  .getVisibleCells()
                  .map((cell) => <td>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>),
              )}
            </tr>
          )),
      )}
    </tbody>
  );
}
