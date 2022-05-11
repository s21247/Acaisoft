import {createContext, useEffect, useState} from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteElement) => {},
    removeFavorite: (elementId) => {},
    itemIsFavorite: (elementId) => {}
})

export function FavoriteContextProvider(props){

    const [userFavorites, setUserFavorites] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("my-favorites")
        if(data)
            setUserFavorites(JSON.parse(data))
    },[])
    useEffect(() => {
        localStorage.setItem("my-favorites",JSON.stringify(userFavorites))
    },[userFavorites])

    function addFavoriteHandler(favoriteElement){
        setUserFavorites(prevUserFav => {
            return prevUserFav.concat(favoriteElement);
        })
    }
    function removeFavoriteHandler(elementId){
        setUserFavorites(prevUserFav => {
            return prevUserFav.filter(element => element.id !== elementId)
        })
    }
    function itemIsFavoriteHandler(elementId){
        return userFavorites.some(element => element.id === elementId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;