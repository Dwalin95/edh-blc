import { api } from './../services/api';
import { TScryFallCardSymbolResponse } from './../schemas/EDHtypes';

const edhApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSymbols: builder.query<TScryFallCardSymbolResponse, void>({
      query: () => ({
        url: `https://api.scryfall.com/symbology`,
      }),
      providesTags: ['ScryFallService'],
    }),
  }),
});

export const { useGetSymbolsQuery } = edhApi;
