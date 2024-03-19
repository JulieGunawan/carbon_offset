import { Lusitana } from 'next/font/google';
import { Roboto } from "next/font/google";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const lusitana = Lusitana({ 
    weight: ['400' , '700'],
    subsets: ['latin'] 
})

export const roboto= Roboto({
    weight:['300','400','500', '700'],
    style:['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
})