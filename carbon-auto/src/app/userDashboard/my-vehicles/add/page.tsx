import { Button, Link } from "@mui/material";

// import { VehicleContainer } from '@/app/ui/vehicles/vehicle-container';
export default function AddVehiclePage():React.JSX.Element {
    return (
        <>
            <p>add vehicle Page</p>
            <Button variant="contained">
                <Link href="/userDashboard/my-vehicles">Back</Link>
            </Button>
        </>
    );
  }