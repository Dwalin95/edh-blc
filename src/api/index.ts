// api.ts
import { api } from '../services/api';
import { CardResponseScryfall, TScryFallCardSymbolResponse } from '../schemas/EDHtypes';

// se vuoi tornare alla versione con il file json devi tornare a questo commit, basta aggiungere sul json le carte e hai fatto, senza usare il BE e Mongo

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
    getFilteredCards: builder.query<CardResponseScryfall[], { name?: string; colors?: string[] }>({
      query: ({ name, colors }) => ({
        url: `https://api.scryfall.com/cards/search`,
        params: {
          q: `${name || ''} ${colors?.map(c => `c:${c}`).join(' ') || ''}`.trim()
        }
      }),
      providesTags: ['ScryFallService'],
    }),
  }),
});

export const { useGetSymbolsQuery, useGetCardQuery, useGetFilteredCardsQuery } = edhApi;