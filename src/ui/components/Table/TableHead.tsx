import { flexRender, Table } from '@tanstack/react-table';
import { Children } from 'react';

export default function TableHead<T>({ table }: { table: Table<T> }) {
  return (
    <thead>
      {Children.toArray(
        table.getHeaderGroups().map((headerGroup) => (
          <tr>
            {Children.toArray(
              headerGroup.headers.map((header) => (
                <th
                  scope="col"
                  {...{
                    colSpan: header.colSpan,
                    style: {
                      width: header.getSize(),
                    },
                  }}
                >
                  {header.isPlaceholder ? null : (
                    <span
                      {...{
                        onClick: header.column.getToggleSortingHandler(),
                        role: header.column.getCanSort() ? 'button' : undefined,
                      }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getCanSort() && (
                        <>
                          {{
                            asc: '  ↑ ',
                            desc: '  ↓ ',
                          }[header.column.getIsSorted() as string] ?? '  ⇅ '}
                        </>
                      )}
                    </span>
                  )}
                </th>
              )),
            )}
          </tr>
        )),
      )}
    </thead>
  );
}
