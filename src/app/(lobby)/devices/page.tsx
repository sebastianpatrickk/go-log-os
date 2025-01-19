import { MonitorSmartphone } from "lucide-react";
import NewDeviceCard from "./_components/NewDeviceCard";
import Devices from "./_components/Devices";
import Dialog from "@/components/Dialog";
import { NewDeviceForm } from "./_components/NewDeviceForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DevicesPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="flex items-center gap-2 text-lg">
        <MonitorSmartphone size={16} />
        <span>Devices</span>
      </h2>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(22.75rem,28rem))]">
        <Devices personId={userId} />
        <Dialog title="New device" trigger={<NewDeviceCard />}>
          <NewDeviceForm personId={userId} />
        </Dialog>
      </div>
    </div>
  );
}
