import Grid from '@mui/material/Grid';
import { VehicleCard } from './vehicle-card';

interface VehicleContainerProps {
    isUser: boolean; // Specify the type of the prop isUser
}

export const VehicleContainer:React.FC<VehicleContainerProps> = ({isUser}) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <VehicleCard isUser={isUser}></VehicleCard>
            </Grid>
            <Grid item xs={4}>
                <VehicleCard isUser={isUser}></VehicleCard>
            </Grid>
            <Grid item xs={4}>
                <VehicleCard isUser={isUser}></VehicleCard>
            </Grid>
         
        </Grid>
    )
}