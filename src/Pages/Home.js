import React from 'react';
import CharacterList from "../components/Characters/CharacterList";
import useCharacters from "../components/Hooks/useCharacters";
import { Container, Typography} from "@mui/material";
import RouterButtons from "../components/RouterButtons";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
    const {loading,data} = useCharacters();

    return (
        <>
            <Container maxWidth="sm" >
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                     gutterBottom
                >
                    Characters
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    MaterialUI is a great way to style pages :)
                </Typography>
               <RouterButtons/>
            </Container>
            {
                loading ? <LoadingSpinner/> :
                    <CharacterList items={data.characters.results}/>
            }

        </>
    );
};

export default Home;