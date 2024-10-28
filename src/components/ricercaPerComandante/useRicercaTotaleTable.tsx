import { createColumnHelper, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo } from 'react';
import { TCommanderData } from '../../schemas/EDHtypes';
import data from '../archive/edhArchive.json';

interface UseRicercaTotaleTableOptions {
  thClassName?: string;
  tdClassName?: string;
  searchTerm?: string; // Aggiungi searchTerm come opzione
}

export default function useRicercaTotaleTable(options?: UseRicercaTotaleTableOptions) {
  const columnHelper = createColumnHelper<TCommanderData>();

  // Crea una mappa per l'URL degli SVG
  const symbolToSvgUri = useMemo(() => {
    const map: { [key: string]: string } = {};
    data.forEach((item) => {
      item.coloriComandante.forEach((color) => {
        map[color] = `https://svgs.scryfall.io/card-symbols/${color}.svg`;
      });
    });
    return map;
  }, []);

  // Filtra i dati in base al termine di ricerca
  const filteredData = useMemo(() => {
    if (options?.searchTerm) {
      const lowercasedSearchTerm = options.searchTerm.toLowerCase();
      return data.filter((item) =>
        item.nomeComandante.toLowerCase().includes(lowercasedSearchTerm)
      );
    }
    return data;
  }, [options?.searchTerm]);

  const columns = useMemo(
    () => [
      columnHelper.accessor('nomeComandante', {
        header: "Commander",
        cell: (info) => (
          <div className={`my-3 text-xl ${options?.tdClassName}`}>
            <strong>{info.getValue()}</strong>
          </div>
        ),
        enableSorting: false,
      }),
      columnHelper.accessor('archidekt', {
        header: "Archidekt",
        cell: ({ row }) => (
          <div className="flex items-center justify-center">
            <a
              href={row.original.archidekt}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm ml-2 flex items-center justify-center"
            >
              <img
                src="https://svgs.scryfall.io/card-symbols/T.svg"
                alt="Card Symbol"
                className="w-9 h-9"
              />
            </a>
          </div>
        ),
        enableSorting: false,
      }),
      columnHelper.accessor('linkLista', {
        header: "Gold-Fish",
        cell: ({ row }) => (
          <div className="flex items-center justify-center">
            <a
              href={row.original.linkLista}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm ml-2 flex items-center justify-center"
            >
              <img
                src="https://svgs.scryfall.io/card-symbols/C.svg"
                alt="Card Symbol"
                className="w-9 h-9"
              />
            </a>
          </div>
        ),
        enableSorting: false,
      }),
      columnHelper.accessor('coloriComandante', {
        header: "Costo",
        cell: (info) => (
          <div className={`flex items-center justify-center ${options?.tdClassName}`}>
            {info.getValue()?.map((color: string, index: number) => (
              <img
                key={`color-${color}-${index}`} // Usa una chiave unica
                src={symbolToSvgUri[color]}
                alt={color}
                className="w-7 h-7"
              />
            ))}
          </div>
        ),
        enableSorting: false,
      }),
    ],
    [symbolToSvgUri, options?.tdClassName],
  );

  const table = useReactTable<TCommanderData>({
    data: filteredData, // Usa i dati filtrati
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return { table, data: filteredData }; // Restituisci i dati filtrati
}
