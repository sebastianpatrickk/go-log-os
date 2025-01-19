"use client";

import * as React from "react";

import {
  Dialog as DialogPrimitive,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { X } from "lucide-react";
import NewDeviceCard from "./NewDeviceCard";
import { usePairNewDeviceDialog } from "@/hooks/use-dialog";

export default function NewDeviceDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpenChange, onOpen } = usePairNewDeviceDialog();
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <DialogPrimitive open={isOpen} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          <NewDeviceCard />
        </DialogTrigger>
        <DialogContent
          closeButton={false}
          className="gap-0 px-5 py-4 sm:max-w-lg"
        >
          <DialogHeader className="">
            <div className="flex flex-row items-center justify-between">
              <DialogTitle className="text-lg">Pair New Device</DialogTitle>
              <DialogClose>
                <X size={16} />
              </DialogClose>
            </div>
          </DialogHeader>
          <div className="">{children}</div>
        </DialogContent>
      </DialogPrimitive>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild onClick={onOpen}>
        <NewDeviceCard />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Pair New Device</DrawerTitle>
        </DrawerHeader>

        <div className="px-4 pb-4">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
