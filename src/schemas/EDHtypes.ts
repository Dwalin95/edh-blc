import { z } from 'zod';

import { MagicFormSchema } from './MagicFormSchema';

export type RicercaPerComandante = {
  nomeComandante: string;
};

export type TCommanderData = {
  nomeComandante: string;
  archidekt: string;
  linkLista:string;
  coloriComandante?: string[];
};

export type MagicFormSchemaType = z.infer<typeof MagicFormSchema>;

export type TScryFallCardSymbol = {
  object: string;
  symbol: string;
  svg_uri: string;
  loose_variant: string | null;
  english: string;
  transposable: boolean;
  represents_mana: boolean;
  appears_in_mana_costs: boolean;
  mana_value: number;
  hybrid: boolean;
  phyrexian: boolean;
  cmc: number;
  funny: boolean;
  colors: string[];
  gatherer_alternates: string[];
};

export type TScryFallCardSymbolResponse = {
  forEach(arg0: (symbol: { symbol: string; svg_uri: string; }) => void): unknown;
  object: string;
  has_more: boolean;
  data: TScryFallCardSymbol[];
};
