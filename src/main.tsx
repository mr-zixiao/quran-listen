import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import App from './App.tsx'
import useMediaQuery from "@mui/material/useMediaQuery";
import {AppLangProvider} from "@/lang";
import {PlayerProvider} from "@/player";

export function Root() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const darkTheme = createTheme({
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
        },
    });
    return <AppLangProvider>
        <ThemeProvider theme={darkTheme}>
            <PlayerProvider>
                <CssBaseline/>
                <App/>
            </PlayerProvider>
        </ThemeProvider>
    </AppLangProvider>
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Root/>
    </StrictMode>,
)
