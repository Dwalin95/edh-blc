import { flexRender, Table } from '@tanstack/react-table';
import { Children } from 'react';

interface TableHeadProps<T> {
  table: Table<T>;
  theadClassName?: string;
  trClassName?: string;
  thClassName?: string;
}

export default function TableHead<T>({
  table,
  theadClassName,
  trClassName,
  thClassName,
}: TableHeadProps<T>) {
  return (
    <thead className={theadClassName}>
      {Children.toArray(
        table.getHeaderGroups().map((headerGroup) => (
          <tr className={trClassName}>
            {Children.toArray(
              headerGroup.headers.map((header) => (
                <th
                  scope="col"
                  className={thClassName}
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
