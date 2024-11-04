import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import SongCreate from './pages/SongCreate.jsx';
import SongList from './pages/SongList.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SongList/>,
  },
  {
    path: "/songs/new",
    element: <SongCreate/>,
  }
]);

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>,
)