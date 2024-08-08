import { Table, flexRender } from '@tanstack/react-table';
import { Children } from 'react';

interface TableBodyProps<T> {
  table: Table<T>;
  tbodyClassName?: string;
  trClassName?: string;
  tdClassName?: string;
}

export default function TableBody<T>({
  table,
  tbodyClassName,
  trClassName,
  tdClassName,
}: TableBodyProps<T>) {
  return (
    <tbody className={`table-group-divider ${tbodyClassName}`}>
      {Children.toArray(
        table
          .getRowModel()
          .rows.map((row) => (
            <tr className={trClassName}>
              {Children.toArray(
                row
                  .getVisibleCells()
                  .map((cell) => (
                    <td className={tdClassName}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  )),
              )}
            </tr>
          )),
      )}
    </tbody>
  );
}
