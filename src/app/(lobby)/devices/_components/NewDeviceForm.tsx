"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { type NewDeviceForm, newDeviceFormSchema } from "@/lib/schemas/device";
import { Minus, Trash2 } from "lucide-react";

export function NewDeviceForm({ userId }: { userId: string }) {
  const { data: teams, isLoading: teamsLoading } =
    useGetTeamsByPersonIdForSelect(userId);

  const form = useForm<NewDeviceForm>({
    resolver: zodResolver(newDeviceFormSchema),
    defaultValues: {
      apiKey: "",
      teams: [],
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: NewDeviceForm) {
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
                  <InputOTP maxLength={8} {...field}>
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
                            >
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select a team" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {teams?.map((team) => (
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
                            form.setValue(
                              "teams",
                              currentTeams.filter((_, i) => i !== index),
                            );
                          }}
                          className="size-10"
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
            disabled={form.formState.isSubmitting}
          >
            Pair device
          </Button>
        </div>
      </form>
    </Form>
  );
}
