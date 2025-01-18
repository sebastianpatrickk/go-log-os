"use client";

import { useQuery } from "@tanstack/react-query";
import { getTeamsByPersonIdForSelect } from "../actions/team";

export function useGetTeamsByPersonIdForSelect(personId: string) {
  const query = useQuery({
    queryKey: ["teams", personId],
    queryFn: () => getTeamsByPersonIdForSelect(personId),
  });

  return query;
}
