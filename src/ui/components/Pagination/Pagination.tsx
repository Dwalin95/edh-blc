import { Table } from '@tanstack/react-table';
import classNames from 'classnames';

import { usePagination } from './usePagination';

export default function Pagination<T>({ table }: { table: Table<T> }) {
  const { pageNumbers, pageSize } = usePagination(table);

  const prevButtonClasses = classNames('page-item', {
    disabled: !table.getCanPreviousPage(),
  });

  const nextButtonClasses = classNames('page-item', {
    disabled: !table.getCanNextPage(),
  });

  return (
    <nav aria-label="Paginazione" className="mb-5">
      <ul className="pagination justify-content-center">
        <li className={prevButtonClasses}>
          <button type="button" className="page-link" onClick={() => table.setPageIndex(0)}>
            <span className="visually-hidden">Vai alla prima pagina</span>
            <i className="bi bi-chevron-double-left" />
          </button>
        </li>

        <li className={prevButtonClasses}>
          <button type="button" className="page-link" onClick={() => table.previousPage()}>
            <span className="visually-hidden">Vai alla pagina precedente</span>
            <i className="bi bi-chevron-left" />
          </button>
        </li>

        {pageNumbers}

        <li className={nextButtonClasses}>
          <button type="button" className="page-link" onClick={() => table.nextPage()}>
            <span className="visually-hidden">Vai alla prossima pagina</span>
            <i className="bi bi-chevron-right" />
          </button>
        </li>

        <li className={nextButtonClasses}>
          <button type="button" className="page-link" onClick={() => table.setPageIndex(pageSize - 1)}>
            <span className="visually-hidden">Vai all&apos;ultima pagina</span>
            <i className="bi bi-chevron-double-right" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
