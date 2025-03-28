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


export interface CardResponseScryfall {
  nomeComandante: string;
  coloriComandante: string[];
  archidekt?: string;
  linkLista?: string;
  moxfield?: string;
  bracket?: number;
}

export type ImageUris = {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
};

export type CardLegalities = {
  [format: string]: string;
};

export type Prices = {
  usd?: string;
  usd_foil?: string;
  usd_etched?: string;
  eur?: string;
  eur_foil?: string;
  tix?: string;
};

export type RelatedUris = {
  [key: string]: string;
};

export type PurchaseUris = {
  [key: string]: string;
};

export type CardFace = {
  object: string;
  name: string;
  mana_cost?: string;
  type_line: string;
  oracle_text?: string;
  colors?: string[];
  power?: string;
  toughness?: string;
  artist?: string;
  artist_id?: string;
  illustration_id?: string;
  image_uris: ImageUris;
};

export type RelatedCard = {
  object: string;
  id: string;
  component: string;
  name: string;
  type_line: string;
  uri: string;
};