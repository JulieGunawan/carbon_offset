import { Typography } from "@mui/material";
import { lusitana } from '@/app/theme/fonts';

export default function HomePage() {
    return (
        <div>
            <Typography 
                className={`${lusitana.className}`} 
                variant='h2'
                sx={{ textAlign: 'center' }}    
            >Growing Trees While Driving</Typography>   
        </div>
    )
}

