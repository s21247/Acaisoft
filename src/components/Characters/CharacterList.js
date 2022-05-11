import React from 'react';
import {
    Container,
    Grid,
} from "@mui/material";
import CharacterItem from "./CharacterItem";
const CharacterList = (props) => {


    return (
            <main>
                <Container sx={{py: 8}} maxWidth="md">
                    <Grid container spacing={4}>
                        {props.items.map(items => <CharacterItem
                            key={items.id}
                            id={items.id}
                            image={items.image}
                            name={items.name}
                            species={items.species}
                            gender={items.gender}/>)}
                    </Grid>
                </Container>
            </main>
    )
};

export default CharacterList;