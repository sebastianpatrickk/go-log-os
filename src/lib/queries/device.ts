"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDeviceCards, pairDevice } from "../actions/device";
import { toast } from "sonner";
import { InputDeviceCard } from "../schemas/device";

export function useGetDeviceCards({ personId }: InputDeviceCard) {
  const query = useQuery({
    queryKey: ["devices"],
    queryFn: () => getDeviceCards({ personId: personId }),
  });

  return query;
}

export function usePairDevice() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: pairDevice,

    onSuccess: () => {
      toast.success("Device paired successfully.");
      queryClient.invalidateQueries({ queryKey: ["devices"] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return mutation;
}
