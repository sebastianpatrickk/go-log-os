"use client";

import { useQuery } from "@tanstack/react-query";
import { getDeviceCards } from "../actions/device";

export function useGetDeviceCards() {
  const query = useQuery({
    queryKey: ["devices"],
    queryFn: getDeviceCards,
  });

  return query;
}
