import { Table as ReactTable } from '@tanstack/react-table';
import React from 'react';
import { Table as BTable, TableProps as BTableProps } from 'react-bootstrap';

import Pagination from '../Pagination/Pagination';

import TableBody from './TableBody';
import TableHead from './TableHead';
import TablePlaceHolder from './TablePlaceholder';

interface TableProps<TData> extends BTableProps {
  /** The table caption */
  caption: string;
  /** The table instance */
  instance: ReactTable<TData>;
  /** If true, the table will be replaced with placeholders */
  isLoading?: boolean;
  /** The table footer */
  footer?: React.ReactNode;
}

function EnhancedTable<TData>(props: TableProps<TData>, ref: React.ForwardedRef<HTMLTableElement>) {
  const { caption, instance, isLoading, footer, ...rest } = props;

  if (isLoading) {
    return <TablePlaceHolder />;
  }

  return (
    <>
      <BTable responsive {...rest} ref={ref}>
        <caption className="visually-hidden">{caption}</caption>
        <TableHead table={instance} />
        <TableBody table={instance} />
        {footer && <tfoot className="table-group-divider">{footer}</tfoot>}
      </BTable>

      {/* Pagination */}
      {instance.options.data.length > instance.getPaginationRowModel().rows.length && <Pagination table={instance} />}
    </>
  );
}

const ForwardedTable = React.forwardRef(EnhancedTable) as <TData>(
  props: TableProps<TData> & { ref?: React.Ref<ReactTable<TData>> },
) => React.ReactElement;

const Table = Object.assign(ForwardedTable, {
  Head: TableHead,
  Body: TableBody,
  Placeholder: TablePlaceHolder,
});

export default Table;
