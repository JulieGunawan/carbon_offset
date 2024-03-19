"use client";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { roboto, lusitana } from '@/app/theme/fonts';

const themeOptions: ThemeOptions = {
    palette: {
        background:{
            default: '#e9f8f9'
        },
        mode: 'light'
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        fontSize: 16
    }
}

const theme = createTheme(themeOptions);

export default function ThemeRegistry({children}: {children: React.ReactNode})
{
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}