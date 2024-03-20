import Grid from '@mui/material/Grid';
import { VehicleCard } from './vehicle-card';
export const VehicleContainer = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <VehicleCard></VehicleCard>
            </Grid>
            <Grid item xs={4}>
                <VehicleCard></VehicleCard>
            </Grid>
            <Grid item xs={4}>
                <VehicleCard></VehicleCard>
            </Grid>
         
        </Grid>
    )
}