// api.ts
import { api } from '../services/api';
import { CardResponseScryfall, TScryFallCardSymbolResponse } from '../schemas/EDHtypes';



const edhApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSymbols: builder.query<TScryFallCardSymbolResponse, void>({
      query: () => ({
        url: `https://api.scryfall.com/symbology`,
      }),
      providesTags: ['ScryFallService'],
    }),
    getCard: builder.query<CardResponseScryfall, string>({
      query: (cardName) => ({
        url: `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(cardName)}`,
      }),
      providesTags: ['ScryFallService'],
    }),
  }),
});

export const { useGetSymbolsQuery, useGetCardQuery } = edhApi;