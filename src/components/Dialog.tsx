"use client";

import * as React from "react";

import {
  Dialog as DialogPrimitive,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
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
import { Button } from "./ui/button";

export default function Dialog({
  title,
  children,
  trigger,
}: {
  title: string;
  children: React.ReactNode;
  trigger: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <DialogPrimitive open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent
          closeButton={false}
          className="gap-0 px-5 py-4 sm:max-w-md"
        >
          <DialogHeader className="">
            <div className="flex flex-row items-center justify-between">
              <DialogTitle className="text-lg">{title}</DialogTitle>
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
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>

        <div className="px-4 pb-4">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
