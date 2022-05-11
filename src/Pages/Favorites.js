import React, {useContext} from 'react';
import FavoritesContext from "../store/FavoritesContext";
import CharacterList from "../components/Characters/CharacterList";
import RouterButtons from "../components/RouterButtons";
import {Container, CssBaseline, Typography} from "@mui/material";

const Favorites = () => {

    const favoritesContext = useContext(FavoritesContext);
    let content;
    if(favoritesContext.totalFavorites === 0)
        content = <Typography variant="h5" align="center" color="text.secondary" paragraph>
            You have got no favorites
        </Typography>
    else
        content = <CharacterList items={favoritesContext.favorites}/>

        return  <Container maxWidth="sm" paddingTop={'0.32em'}>
            <CssBaseline/>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    My favorites
                </Typography>
            <RouterButtons/>

            {content}
        </Container>
}
export default Favorites;