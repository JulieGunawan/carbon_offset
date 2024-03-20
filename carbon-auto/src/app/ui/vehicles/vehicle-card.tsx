import Link from 'next/link';
import NavLinks from '@/app/ui/admin-dashboard/nav-links';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export const VehicleCard = () => {
  return (
    <Card sx={{display: 'flex'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia
            component="img"
            height="194"
            image="/2022-camry.jpeg"
            alt="Paella dish"
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
            2022 Toyota Camry
          </Typography>
          
          <Typography component="div" variant="body1" color="text.secondary" >
            Make: Toyota <br/>
            Model: Camry <br/>
            Trim: LE <br/>
            Year: 2022 <br/>
            Fuel Type: Petrol <br/>
            Mileage: 39,880 km <br/>
            km to tree ratio: 1:1.1 <br/>
            # of trees planted: 43,800 <br/>
            # of tree needed to offset the carbon footprint: 43868 (mileage* ratio)
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Buy Trees</Button>
      </CardActions>
      </Box>
      
    </Card>
  )
}
