import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="relative">
            <Toolbar >

                <Typography variant="h6" color="inherit" noWrap >
                    Rick n Morty
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;