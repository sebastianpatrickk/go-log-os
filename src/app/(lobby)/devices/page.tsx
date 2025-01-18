import { MonitorSmartphone } from "lucide-react";
import DeviceCard from "./_components/DeviceCard";
import NewDeviceCard from "./_components/NewDeviceCard";

export default async function Devices() {
  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="flex items-center gap-2 text-lg">
        <MonitorSmartphone size={16} />
        <span>Devices</span>
      </h2>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(22.75rem,28rem))]">
        <DeviceCard />
        <NewDeviceCard />
      </div>
    </div>
  );
}
