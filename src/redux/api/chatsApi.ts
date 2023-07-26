import { rootApi } from './rootApi';

const chatsApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getAllChats: build.query({
      query: () => '/GetAllChats/',
    }),
  }),
});

export const { useGetAllChatsQuery } = chatsApi;
