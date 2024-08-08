// import { useState, useCallback } from 'react';
// import debounce from 'lodash.debounce'; // Importa la funzione debounce
import Table from "../../ui/components/Table/Table";
import useRicercaTotaleTable from "./useRicercaTotaleTable";

export default function RicercaTotale() {
  // const [searchTerm, setSearchTerm] = useState('');
  const { table, data } = useRicercaTotaleTable({
    thClassName: "px-4 py-2 text-left text-black",
    tdClassName: "px-4 py-2 text-black",
    // searchTerm
  });

  // Crea una funzione di debounce per gestire la modifica dell'input
  // const handleSearchChange = useCallback(
  //   debounce((e) => setSearchTerm(e.target.value), 300),
  //   []
  // );

  // Verifica se ci sono risultati da mostrare
  const noResults = data.length === 0;

  return (
    <div className="bg-blue-100 p-4 mx-2 mb-5 rounded-lg shadow-md max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
      <div className="mb-4">
        {/* <input
          type="text"
          placeholder="Cerca per nome del comandante..."
          className="px-4 py-2 border rounded-lg w-full text-black placeholder-black" // Assicurati che il testo e il placeholder siano neri
          onChange={(e) => handleSearchChange(e)}
        /> */}
      </div>
      {noResults ? (
        <div className="text-center text-xl text-red-600">
          Nessun risultato trovato
        </div>
      ) : (
        <Table
          instance={table}
          className="w-full table-auto bg-yellow-50 rounded-lg text-black text-2xl text-center"
          striped
        >
          <Table.Head
            table={table}
            theadClassName="bg-red-200 text-black"
            trClassName="border-b"
            thClassName="px-4 py-2 text-left"
          />
          <Table.Body
            table={table}
            tbodyClassName="divide-y divide-red-200"
            trClassName="hover:bg-red-100"
            tdClassName="px-4 py-2 text-black"
          />
        </Table>
      )}
    </div>
  );
}
