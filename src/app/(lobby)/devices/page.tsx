import { MonitorSmartphone } from "lucide-react";
import NewDeviceCard from "./_components/NewDeviceCard";
import Devices from "./_components/Devices";

export default async function DevicesPage() {
  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="flex items-center gap-2 text-lg">
        <MonitorSmartphone size={16} />
        <span>Devices</span>
      </h2>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(22.75rem,28rem))]">
        <Devices />
        <NewDeviceCard />
      </div>
    </div>
  );
}
