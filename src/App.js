import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import Routing from "./components/Routing/Routing";

function App() {
    const theme = createTheme();
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Router>
                    <div>
                        <Navbar/>
                        <div>
                           <Routing/>
                        </div>
                    </div>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
