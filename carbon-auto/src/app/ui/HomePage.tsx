import Link from 'next/link';
import { Typography } from "@mui/material";
import { lusitana } from '@/app/theme/fonts';

const HomePage: React.FC = () => {
    return (
        <div>
            <Typography 
                className={`${lusitana.className}`} 
                variant='h2'
                sx={{ textAlign: 'center' }}    
            >Growing Trees While Driving</Typography>   
        </div>
    );
};

export default HomePage;