"use client";

import { Checkbox } from "@/components/ui/checkbox";

import DateColumn from "@/components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import { BriefItemDTO } from "@/types/itemTypes";

export const columns: ColumnDef<BriefItemDTO>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "thumbnail",
    header: "Item Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="thumbnail" />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortableColumn column={column} title="Item Name" />,
  },
//   {
//     accessorKey: "costPrice",
//     header: ({ column }) => <SortableColumn column={column} title="Cost Price" />,
//   },
//   {
//     accessorKey: "sellingPrice",
//     header: ({ column }) => <SortableColumn column={column} title="Selling Price" />,
//   },
    // {
    //     accessorKey: "description",
    //     header: "Description",
    //     cell: ({ row }) => <span>{row.getValue("description")}</span>,
    // },
//   {
//     accessorKey: "createdAt",
//     header: "Date Created",
//     cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
//   },
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;
      return (
        <ActionColumn
          row={row}
          model="item"
          editEndpoint={""}
          id={item.id}
        />
      );
    },
  },
];
