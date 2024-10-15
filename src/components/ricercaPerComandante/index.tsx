import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { MagicFormSchemaType } from '../../schemas/EDHtypes';

import data from '../archive/edhArchive.json';

import RicercaPerComandante from './RicercaComandante';

export default function RicercaComandante() {
  const [searchResults, setSearchResults] = useState<
    { nomeComandante: string; coloriComandante: string[]; arkideck: string }[]
  >([]);

  const onSubmit: SubmitHandler<MagicFormSchemaType> = (comandante) => {
    const result = data.filter((item) =>
      item.nomeComandante.toLowerCase().includes(comandante.comandante.toLowerCase()),
    );
    setSearchResults(result);
  };

  return (
    <>
      <RicercaPerComandante {...{ onSubmit, searchResults }} />
    </>
  );
}
