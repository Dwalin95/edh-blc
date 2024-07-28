import { Table as ReactTable } from '@tanstack/react-table';

export function generateTableFooter<T>(table: ReactTable<T>, rowsSelection: T[]) {
  return (
    <tr>
      <td colSpan={table.getAllColumns().length}>
        <div>
          <strong>{rowsSelection.length}</strong>
          {` di ${table.getCoreRowModel().rows.length} elementi selezionati`}
        </div>
      </td>
    </tr>
  );
}
