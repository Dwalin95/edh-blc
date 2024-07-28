import { Table } from '@tanstack/react-table';
import React, { useCallback, useMemo } from 'react';
import { PageItem } from 'react-bootstrap';

export function usePagination<T>(table: Table<T>) {
  const pageSize = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  const pageNumbers = useMemo(
    () =>
      React.Children.toArray(
        [...new Array(pageSize)].map((_, index) => {
          const pageNumber = index + 1;
          const isCurrentPageWithinTwoPageNumbers = Math.abs(pageNumber - currentPage) <= 1;

          if (isCurrentPageWithinTwoPageNumbers) {
            return (
              <PageItem onClick={() => table.setPageIndex(pageNumber - 1)} active={pageNumber === currentPage}>
                {pageNumber}
              </PageItem>
            );
          }

          return null;
        }),
      ),
    [currentPage, pageSize, table],
  );

  const jumpToPage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const page = e.target.value ? Number(e.target.value) - 1 : 0;
      table.setPageIndex(page);
    },
    [table],
  );

  return {
    pageSize,
    currentPage,
    pageNumbers,
    jumpToPage,
  };
}
