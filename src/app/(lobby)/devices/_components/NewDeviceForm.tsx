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

export function NewDeviceForm({ userId }: { userId: string }) {
  const { data: teams } = useGetTeamsByPersonIdForSelect(userId);

  const form = useForm<PairDevice>({
    resolver: zodResolver(pairDeviceSchema),
    defaultValues: {
      apiKey: "",
      teams: [],
      personId: userId,
    },
  });

  const getAvailableTeams = (currentValue?: string) => {
    const selectedTeams = form.getValues("teams") || [];
    return teams?.filter(
      (team) =>
        !selectedTeams.includes(team.id.toString()) ||
        team.id.toString() === currentValue,
    );
  };

  // 2. Define a submit handler.
  async function onSubmit(values: PairDevice) {
    // Simulate API call with 3 second delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="apiKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>API Key</FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={8}
                    {...field}
                    disabled={form.formState.isSubmitting}
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
              control={form.control}
              name="teams"
              render={() => (
                <FormItem>
                  <FormLabel>Teams</FormLabel>
                  <div className="space-y-2">
                    {(form.watch("teams") || []).map((_, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FormField
                          control={form.control}
                          name={`teams.${index}`}
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value || ""}
                              disabled={form.formState.isSubmitting}
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
                            const currentTeams = form.getValues("teams") || [];
                            if (currentTeams.length === 1) {
                              return;
                            }
                            form.setValue(
                              "teams",
                              currentTeams.filter((_, i) => i !== index),
                            );
                          }}
                          className="size-10"
                          disabled={
                            form.watch("teams")?.length === 1 ||
                            form.formState.isSubmitting
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
                      const currentTeams = form.getValues("teams") || [];
                      form.setValue("teams", [...currentTeams, ""]);
                    }}
                    disabled={
                      (teams &&
                        teams.length === (form.watch("teams") || []).length) ||
                      form.formState.isSubmitting
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

        <div className="mt-6 flex justify-end">
          <Button
            type="submit"
            variant="outline"
            className="h-9"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
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
