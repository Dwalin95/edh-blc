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


export type CardResponseScryfall = {
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: number[];
  mtgo_id: number;
  tcgplayer_id: number;
  cardmarket_id: number;
  name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: string;
  highres_image: boolean;
  image_status: string;
  image_uris?: ImageUris;
  mana_cost?: string;
  cmc: number;
  type_line: string;
  oracle_text?: string;
  colors?: string[];
  color_identity: string[];
  keywords?: string[];
  legalities: Legalities;
  games: string[];
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  finishes: string[];
  oversized: boolean;
  promo: boolean;
  reprint: boolean;
  variation: boolean;
  set_id: string;
  set: string;
  set_name: string;
  set_type: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  prints_search_uri: string;
  collector_number: string;
  digital: boolean;
  rarity: string;
  card_back_id: string;
  artist?: string;
  artist_ids?: string[];
  illustration_id?: string;
  border_color: string;
  frame: string;
  security_stamp?: string;
  full_art: boolean;
  textless: boolean;
  booster: boolean;
  story_spotlight: boolean;
  edhrec_rank?: number;
  penny_rank?: number;
  prices: Prices;
  related_uris: RelatedUris;
  purchase_uris: PurchaseUris;
  card_faces?: CardFace[];
  all_parts?: RelatedCard[];
};

export type ImageUris = {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
};

export type Legalities = {
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