import React, {useContext} from 'react';
import FavoritesContext from "../../store/FavoritesContext";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const CharacterItem = (props) => {
    const favoriteContext = useContext(FavoritesContext);

    const itemIsFavorite = favoriteContext.itemIsFavorite(props.id)

    function toggleFavoriteHandler(){
        if(itemIsFavorite)
            favoriteContext.removeFavorite(props.id)
        else {
            favoriteContext.addFavorite({
                id: props.id,
                image: props.image,
                name: props.name,
                species: props.species,
                gender: props.gender
            })
        }
    }
    return (
        <Grid item key={props.id} xs={12} sm={6} md={4}>
            <Card
                sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
            >
                <CardMedia
                    component="img"
                    sx={{
                        // 16:9
                        pt: '56.25%',
                    }}
                    image={props.image}
                    alt="random"
                />
                <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography>
                        {props.species}
                    </Typography>
                    <Typography>
                        {props.gender}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={toggleFavoriteHandler} size="small">{itemIsFavorite ?
                        'Remove from Favorites' : 'To Favorites'}</Button>
                </CardActions>
            </Card>
        </Grid>
    )
};

export default CharacterItem;