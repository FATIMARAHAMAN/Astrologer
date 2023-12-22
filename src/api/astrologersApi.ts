import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api/astrologers' }),
  endpoints: (builder) => ({
    getAstrologers: builder.query<any, void>({
      query: () => '',
    }),
    registerAstrologer: builder.mutation<any, any>({
      query: (newAstrologer) => ({
        url: '/register',
        method: 'POST',
        body: newAstrologer,
      }),
    }),
    editAstrologer: builder.mutation<any, any>({
      query: ({ id, updatedAstrologer }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: updatedAstrologer,
      }),
    }),
  }),
});

export const { useGetAstrologersQuery, useRegisterAstrologerMutation, useEditAstrologerMutation } = api;