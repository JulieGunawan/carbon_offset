import { VehicleContainer } from '@/app/ui/vehicles/vehicle-container';
import { Button, Link } from '@mui/material';
export default function MyVehiclePage():React.JSX.Element {
    return (
        <>
            <p>my vehicle Page</p>
            <VehicleContainer isUser={true}/>
            <Button variant="contained">
                <Link href="/userDashboard/my-vehicles/add">Add Vehicle</Link>
            </Button>
        </>
    );
  }