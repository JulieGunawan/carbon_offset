import { VehicleContainer } from '@/app/ui/vehicles/vehicle-container';
import { Button } from '@mui/material';
export default function MyVehiclePage():React.JSX.Element {
    return (
        <>
            <p>my vehicle Page</p>
            <VehicleContainer />
            <Button variant="contained">Add Vehicle</Button>
        </>
    );
  }