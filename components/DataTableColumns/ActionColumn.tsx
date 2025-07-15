"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";
import { deleteSaving } from "@/actions/savings";
import { deleteUser } from "@/actions/users";

type ActionColumnProps = {
  row: any;
  model: any;
  editEndpoint: string;
  id: string | undefined;
  // revPath: string;
};
export default function ActionColumn({
  row,
  model,
  editEndpoint,
  id = "",
}: ActionColumnProps) {
  const isActive = row.isActive;
  async function handleDelete() {
    try {
      if (model === "saving") {
        const res = await deleteSaving(id);
        if (res?.ok) {
          window.location.reload();
        }
        toast.success(`${model} Deleted Successfully`);
      } else if (model === "user") {
        const res = await deleteUser(id);
        if (res?.ok) {
          window.location.reload();
        }
        toast.success(`${model} Deleted Successfully`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Category Couldn't be deleted");
    }
  }
    return (
        <div className="flex items-center">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant={"ghost"}
                        size={"icon"}
                        className="text-red-600 hover:text-red-700 transition-all duration-500 cursor-pointer "
                    >
                        <Trash className="w-4 h-4  mr-2 flex-shrink-0" />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete this{" "}
                            {model}.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <Button variant={"destructive"} onClick={() => handleDelete()}>
                            Permanently Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {editEndpoint && (
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="text-blue-600 hover:text-blue-700 transition-all duration-500 cursor-pointer "
                >
                    <Link href={editEndpoint} className="flex item gap-2">
                        <Pencil className="w-4 h-4 " />
                    </Link>
                </Button>
            )}
            
        </div>
    );
}
