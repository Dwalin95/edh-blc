import { useMemo } from 'react';
import { createColumnHelper, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { useGetSymbolsQuery } from '../../api';
import { TCommanderData } from '../../schemas/EDHtypes';
import data from '../archive/edhArchive.json';

const useComandanteTable = () => {
  const columnHelper = createColumnHelper<TCommanderData>();

  const { data: symbolsData } = useGetSymbolsQuery();

  const symbolToSvgUri = useMemo(() => {
    const map: { [key: string]: string } = {};
    if (symbolsData) {
      symbolsData.data.forEach(symbol => {
        map[symbol.symbol.replace(/[{}]/g, '')] = symbol.svg_uri;
      });
    }
    return map;
  }, [symbolsData]);

  const columns = useMemo(() => [
    columnHelper.accessor('nomeComandante', {
      header: "Nome Comandante",
      cell: info => <div className="table-cell-center">{info.getValue()}</div>,
      enableSorting: false,
    }),
    columnHelper.accessor('archidekt', {
      header: "Lista Comandante",
      cell: () => (
        <div className="flex items-center justify-center">
          <img
            src="https://svgs.scryfall.io/card-symbols/T.svg"
            alt="Card Symbol"
            className="w-6 h-6"
          />
        </div>
      ),
      enableSorting: false,
    }),
    columnHelper.accessor('coloriComandante', {
      header: "Costo Comandante",
      cell: info => (
        <div className="flex items-center justify-center">
          {info.getValue()?.map((color, index) => (
            <img
              key={`${color}-${index}`}
              src={symbolToSvgUri[color]}
              alt={color}
              className="w-5 h-5 ml-1"
            />
          ))}
        </div>
      ),
      enableSorting: false,
    }),
  ], [symbolToSvgUri, columnHelper]);

  const table = useReactTable<TCommanderData>({
    data,
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  return { table };
};

export default useComandanteTable;
