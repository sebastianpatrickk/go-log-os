"use client";

import { useGetDeviceCards } from "@/lib/queries/device";
import DeviceCard from "./DeviceCard";

export default function Devices({ personId }: { personId: string }) {
  const { data, isLoading } = useGetDeviceCards({ personId: personId });

  if (isLoading) return <DeviceCard.Skeleton />;

  return (
    <>{data?.map((device) => <DeviceCard key={device.id} device={device} />)}</>
  );
}
