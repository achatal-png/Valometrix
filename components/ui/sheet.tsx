"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetPortal = DialogPrimitive.Portal;

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn("fixed inset-0 z-50 bg-slate-900/30", className)}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[84%] max-w-xs border-r bg-white p-4 shadow-xl sm:w-[420px]",
          className,
        )}
        {...props}
      >
        {children}
        <SheetClose className="absolute right-3 top-3 rounded-md p-1 text-slate-500 hover:bg-slate-100">
          <X className="h-4 w-4" />
          <span className="sr-only">Fermer</span>
        </SheetClose>
      </DialogPrimitive.Content>
    </SheetPortal>
  );
}

export { Sheet, SheetClose, SheetContent, SheetTrigger };
