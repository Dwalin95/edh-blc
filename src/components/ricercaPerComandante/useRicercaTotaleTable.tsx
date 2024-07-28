import { createColumnHelper, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Typewriter from '../../hooks/Typerwrite';
import { useGetSymbolsQuery } from '../../api';
import { TCommanderData } from '../../schemas/EDHtypes';

import data from '../archive/edhArchive.json';

export default function useRicercaTotaleTable() {
  const navigate = useNavigate();
  const columnHelper = createColumnHelper<TCommanderData>();

  // Fetch data using RTK query
  const { data: symbolsData } = useGetSymbolsQuery();

  // Create a mapping of symbol to svg_uri
  const symbolToSvgUri = useMemo(() => {
    const map: { [key: string]: string } = {};
    if (symbolsData) {
      symbolsData.data.forEach((symbol) => {
        map[symbol.symbol.replace(/[{}]/g, '')] = symbol.svg_uri;
      });
    }
    return map;
  }, [symbolsData]);

  const columns = useMemo(
    () => [
      columnHelper.accessor('nomeComandante', {
        header: () => <Typewriter text="Commander" className="table-header-center" speed={0.05} />,
        cell: (info) => <div className="table-cell-center">{info.getValue()}</div>,
        enableSorting: false,
      }),
      columnHelper.accessor('listaComandante', {
        header: () => <Typewriter text="Lista Comandante" className="table-header-center" speed={0.05} />,
        cell: ({ row }) => (
          <div className="d-flex align-items-center justify-content-center">
            <p className="mb-0">Vai alla lista</p>
            <a
              href={row.original.listaComandante}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm ms-2"
            >
              <img
                src="https://svgs.scryfall.io/card-symbols/T.svg"
                alt="Card Symbol"
                style={{ width: '25px', height: '25px' }} // Imposta dimensioni fisse per l'immagine
              />
              {/* <i className="bi bi-search" style={{ fontSize: '1rem' }} /> */}
            </a>
          </div>
        ),
        enableSorting: false,
      }),
      columnHelper.accessor('coloriComandante', {
        header: () => <Typewriter text="Costo Comandante" className="table-header-center" speed={0.05} />,

        cell: (info) => (
          <div className="d-flex align-items-center justify-content-center">
            {info
              .getValue()
              ?.map((color: string) => (
                <img
                  key={color}
                  src={symbolToSvgUri[color]}
                  alt={color}
                  style={{ width: '20px', height: '20px', marginLeft: '5px' }}
                />
              ))}
          </div>
        ),
        enableSorting: false,
      }),
    ],
    [navigate, symbolToSvgUri],
  );

  const table = useReactTable<TCommanderData>({
    data, // Usa i dati importati direttamente
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return { table, data };
}
