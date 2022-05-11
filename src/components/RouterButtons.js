import React from 'react';
import {Button, Stack} from "@mui/material";
import {Link} from "react-router-dom";

const RouterButtons = () => {
    return (
        <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
        >
            <Button variant="contained"><Link to={"/"}>Home</Link></Button>
            <Button variant="outlined"><Link to={"/Favorites"}>Favorites</Link></Button>
        </Stack>
    );
};

export default RouterButtons;