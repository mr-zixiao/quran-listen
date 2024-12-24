import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import {useTranslation} from '@/lang'

interface Props {
    openDrawer: () => void;
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll(props: Props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return children
        ? React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        })
        : null;
}

export default function AppMenuBar(props: Props) {
    const {t, changeLanguage} = useTranslation()
    return (
        <React.Fragment>
            <CssBaseline/>
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            onClick={props.openDrawer}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            {t('app.name')}
                        </Typography>
                        <IconButton size="large" aria-label="search" color="inherit">
                            <SearchIcon/>
                        </IconButton>
                        <IconButton
                            onClick={changeLanguage}
                            size="large"
                            aria-label="translateIcon"
                            edge="end"
                            color="inherit"
                        >
                            <TranslateIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar/>
            <Container>
                <Box>
                    {props.children}
                </Box>
            </Container>
        </React.Fragment>
    );
}
