import { VehicleContainer } from '@/app/ui/vehicles/vehicle-container';
export default function LatestUploadPage():React.JSX.Element {
    return (
        <>
            <p>this page shows the latest uploaded vehicle by users. Upload needs to show the last 24 hours</p>
            <VehicleContainer />
        </>
    );
  }