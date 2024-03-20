import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export const AdminProfile = () => {
  return (
    <>
      <Card sx={{display: 'flex'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
              component="img"
              height="194"
              image="/admin.jpg"
              alt="admin photo"
          />
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h4">
              Admin Name
            </Typography>
            
            <Typography component="div" variant="body1" color="text.secondary" >
              Email: admin@example.com <br/>
              Status: Admin <br/>
              Password: *********
            </Typography>
          </CardContent>
          <CardActions>
              <Button size="small">Change Password</Button>
              <Button size="small">Update mile to tree ratio</Button>
        </CardActions>
        </Box>
        
      </Card>
    </>
  )
}
