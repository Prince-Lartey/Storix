"use client";

import { ColumnDef } from "@tanstack/react-table";

import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { TaxDTO, UnitDTO, UserWithRoles } from "@/types/types";

export const columns: ColumnDef<TaxDTO>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => <SortableColumn column={column} title="Name" />,
    },
    {
        accessorKey: "rate",
        header: ({ column }) => <SortableColumn column={column} title="Rate" />,
    },

    // {
    //   accessorKey: "createdAt",
    //   header: "Date Created",
    //   cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
    // },
    {
        id: "actions",
        accessorKey: "Action",
        cell: ({ row }) => {
            const tax = row.original;
            return (
                <ActionColumn
                    row={row}
                    model="tax"
                    editEndpoint={""}
                    id={tax.id}
                />  
            );
        },
    },
];
