import { create } from "zustand";

type DialogState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: (open: boolean) => void;
};

export const usePairNewDeviceDialog = create<DialogState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onOpenChange: (open) => {
    console.log(open);
    set({ isOpen: open });
  },
}));
