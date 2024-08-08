import { Table } from '@tanstack/react-table';
import React, { useCallback, useMemo } from 'react';

const getIconUrlForPageNumber = (pageNumber: number) => 
  `https://svgs.scryfall.io/card-symbols/${pageNumber}.svg`;

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
              <p
                key={pageNumber}
                onClick={() => table.setPageIndex(pageNumber - 1)}
                className={pageNumber === currentPage ? 'active' : ''}
              >
                <img
                  src={getIconUrlForPageNumber(pageNumber)}
                  alt={`Page ${pageNumber}`}
                  className="w-9 h-9"
                />
              </p>
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
