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
    getFilteredCards: builder.query<CardResponseScryfall[], { name?: string; colors?: string[] }>({
      query: ({ name, colors }) => ({
        url: `https://api.scryfall.com/cards/search`,
        params: {
          q: `${name || ''} ${colors?.map(c => `c:${c}`).join(' ') || ''}`.trim()
        }
      }),
      providesTags: ['ScryFallService'],
    }),
    getCommanders: builder.query<CardResponseScryfall[], void>({
      query: () => ({
        url: `https://edh-blc-be.vercel.app/api/decks`, 
      }),
      providesTags: ['Commanders'],
    }),
  }),
});

export const { useGetSymbolsQuery, useGetCardQuery, useGetFilteredCardsQuery, useGetCommandersQuery } = edhApi;