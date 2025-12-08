import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.bendonaldschools.com",
});
export const apiSlice = createApi({
  baseQuery,
  tagTypes: [
    'User',
    'Students',
    'Staff',
    'Results',
    'Awards',
    'Admission',
    'Events',
    'NextTerm',
    'Data',
    'Announcement',
    'SchemeOfWork',
    'TimeTable',
    'Billing',
  ],
  // eslint-disable-next-line
  endpoints: (builder) => ({}),
});
