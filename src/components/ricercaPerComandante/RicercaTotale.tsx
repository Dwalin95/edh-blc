// import { useState, useCallback } from 'react';
// import debounce from 'lodash.debounce'; // Importa la funzione debounce
// import Table from "../../ui/components/Table/Table";
import { Card } from "./useClaude";
// import useRicercaTotaleTable from "./useRicercaTotaleTable";
import commanderData  from '../archive/edhArchive.json';

export default function RicercaTotale() {
  return (
    // <div className="bg-blue-100 p-4 mx-2 mb-5 rounded-lg shadow-md max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
    //   <div className="mb-4">
    //     <h1 className="text-2xl font-bold text-center mb-6">Ricerca Totale</h1>
    //   </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-5 p-5">
        {commanderData.map((commander, index) => (
          <Card
            key={index}
            commander={{
              nomeComandante: commander.nomeComandante,
              coloriComandante: commander.coloriComandante,
              archidekt: commander.archidekt,
              linkLista: commander.linkLista,
            }}
          />
        ))}
      </div>
    // </div>
  );
}