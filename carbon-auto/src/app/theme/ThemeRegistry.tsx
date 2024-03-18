"use client";
import { Roboto } from "next/font/google";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const roboto= Roboto({
    weight:['300','400','500', '700'],
    style:['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
})

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