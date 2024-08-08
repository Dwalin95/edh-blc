import { Table } from '@tanstack/react-table';

import { usePagination } from './usePagination';

export default function Pagination<T>({ table }: { table: Table<T> }) {
  const { pageNumbers, pageSize } = usePagination(table);



  return (
    <div className="flex justify-center mt-4">

    <nav aria-label="Paginazione" className="mb-5">
      <ul className="pagination justify-content-center flex space-x-9 mt-5"> {/* Spazio tra gli elementi */}
        <p>
          <button type="button" className="page-link" onClick={() => table.setPageIndex(0)}>
            <img
                src="https://svgs.scryfall.io/card-symbols/0.svg"
                alt="Card Symbol"
                className="w-9 h-9"
              />
          </button>
        </p>

        <p>
          <button type="button" className="page-link" onClick={() => table.previousPage()}>
            <img
                src="https://svgs.scryfall.io/card-symbols/Q.svg"
                alt="Card Symbol"
                className="w-9 h-9"
              />
          </button>
        </p>

        {pageNumbers}

        <p>
          <button type="button" className="page-link" onClick={() => table.nextPage()}>
            <img
                src="https://svgs.scryfall.io/card-symbols/T.svg"
                alt="Card Symbol"
                className="w-9 h-9"
              />
          </button>
        </p>

        <p>
          <button type="button" className="page-link" onClick={() => table.setPageIndex(pageSize - 1)}>
            <img
                src="https://svgs.scryfall.io/card-symbols/TK.svg"
                alt="Card Symbol"
                className="w-9 h-9"
              />
          </button>
        </p>
      </ul>
    </nav>
      </div>

  );
}
