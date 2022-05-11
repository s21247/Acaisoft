import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider} from '@apollo/client'
import {FavoriteContextProvider} from "./store/FavoritesContext";
import {client} from './components/ApolloConfig/ApolloConfig'

ReactDOM.render(
    <React.StrictMode>
        <FavoriteContextProvider>
        <ApolloProvider client={client}>
        <App />
        </ApolloProvider>
        </FavoriteContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);