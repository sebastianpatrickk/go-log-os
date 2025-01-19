"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetTeamsByPersonIdForSelect } from "@/lib/queries/team";
import { type PairDevice, pairDeviceSchema } from "@/lib/schemas/device";
import { Loader, Trash2 } from "lucide-react";
import { usePairDevice } from "@/lib/queries/device";
import { usePairNewDeviceDialog } from "@/hooks/use-dialog";
import React from "react";

export function NewDeviceForm({ personId }: { personId: string }) {
  const { data: teams } = useGetTeamsByPersonIdForSelect(personId);
  const { onClose } = usePairNewDeviceDialog();
  const mutation = usePairDevice();

  const form = useForm<PairDevice>({
    resolver: zodResolver(pairDeviceSchema),
    defaultValues: {
      apiKey: "",
      teams: [],
      personId: personId,
    },
  });

  const {
    getValues,
    reset,
    formState,
    control,
    setValue,
    watch,
    handleSubmit,
  } = form;

  const getAvailableTeams = (currentValue?: string) => {
    const selectedTeams = getValues("teams") || [];
    return teams?.filter(
      (team) =>
        !selectedTeams.includes(team.id.toString()) ||
        team.id.toString() === currentValue,
    );
  };

  // 2. Define a submit handler.
  async function onSubmit(values: PairDevice) {
    mutation.mutate(values, {
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <div className="space-y-6">
          <FormField
            control={control}
            name="apiKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>API Key</FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={8}
                    {...field}
                    disabled={formState.isSubmitting}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                      <InputOTPSlot index={6} />
                      <InputOTPSlot index={7} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <FormField
              control={control}
              name="teams"
              render={() => (
                <FormItem>
                  <FormLabel>Teams</FormLabel>
                  <div className="space-y-2">
                    {(watch("teams") || []).map((_, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FormField
                          control={control}
                          name={`teams.${index}`}
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value || ""}
                              disabled={formState.isSubmitting}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select a team" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {getAvailableTeams(field.value)?.map((team) => (
                                  <SelectItem
                                    key={team.id}
                                    value={team.id.toString()}
                                  >
                                    {team.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          onClick={() => {
                            const currentTeams = getValues("teams") || [];
                            if (currentTeams.length === 1) {
                              return;
                            }
                            setValue(
                              "teams",
                              currentTeams.filter((_, i) => i !== index),
                            );
                          }}
                          className="size-10"
                          disabled={
                            watch("teams")?.length === 1 ||
                            formState.isSubmitting
                          }
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2 w-full"
                    onClick={() => {
                      const currentTeams = getValues("teams") || [];
                      setValue("teams", [...currentTeams, ""]);
                    }}
                    disabled={
                      (teams &&
                        teams.length === (watch("teams") || []).length) ||
                      formState.isSubmitting
                    }
                  >
                    Add Team
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="outline"
            className="h-9"
            disabled={formState.isSubmitting}
          >
            {formState.isSubmitting ? (
              <Loader className="size-4 animate-spin" />
            ) : (
              "Pair device"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
