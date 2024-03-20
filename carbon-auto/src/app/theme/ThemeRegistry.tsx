"use client";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Colors } from "@/app/theme/colors";
import { roboto, lusitana } from '@/app/theme/fonts';

const themeOptions: ThemeOptions = {
    palette: {
        background:{
            default: Colors.background,
        },
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        },
        error: {
            main: Colors.danger
        },
        warning: {
            main: Colors.warning
        },
        info: {
            main: Colors.info
        },
        mode: 'dark'
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