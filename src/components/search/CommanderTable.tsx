import React from 'react';

interface Commander {
  nomeComandante: string;
  coloriComandante: string[];
  listaComandante: string;
}

interface CommanderTableProps {
  commanders: Commander[];
}

const CommanderTable: React.FC<CommanderTableProps> = ({ commanders }) => {
  return (
    <div className="bg-gray-200 p-4 rounded shadow">
      <table className="min-w-full text-black">
        <thead>
          <tr>
            <th className="py-2">Nome Comandante</th>
            <th className="py-2">Lista Comandante</th>
            <th className="py-2">Costo Comandante</th>
          </tr>
        </thead>
        <tbody>
          {commanders.map((commander) => (
            <tr key={commander.nomeComandante}>
              <td className="border px-4 py-2">{commander.nomeComandante}</td>
              <td className="border px-4 py-2">{commander.listaComandante}</td>
              <td className="border px-4 py-2">{/* Costo da API */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommanderTable;
