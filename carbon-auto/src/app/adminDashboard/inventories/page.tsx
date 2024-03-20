import { VehicleContainer } from '@/app/ui/vehicles/vehicle-container';
export default function AdminInventoryPage():React.JSX.Element {
    return (
        <>
            <p>admin inventory Page</p>
            <VehicleContainer isUser={false}/>
        </>
    );
  }