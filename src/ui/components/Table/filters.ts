import { FilterFn } from '@tanstack/react-table';

export const startsWithGlobalFilterFn: FilterFn<unknown> = (row, columnId, filterValue) => {
  const rowValue = String(row.getValue(columnId));
  return rowValue.toLowerCase().startsWith(filterValue.toLowerCase());
};
