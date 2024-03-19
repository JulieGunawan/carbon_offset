import { lusitana } from '@/app/theme/fonts';
import Image from 'next/image';

export default function DashboardLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image 
        src="/Tree.svg" 
        width={100} 
        height={80} 
        alt="logo"
        priority={true}
        />
    </div>
  );
}
