"use client";

import { ColumnDef } from "@tanstack/react-table";

import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { UnitDTO } from "@/types/types";

export const columns: ColumnDef<UnitDTO>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => <SortableColumn column={column} title="Name" />,
    },
    {
        accessorKey: "symbol",
        header: ({ column }) => <SortableColumn column={column} title="Symbol" />,
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
            const unit = row.original;
            return (
                <ActionColumn
                    row={row}
                    model="unit"
                    editEndpoint={""}
                    id={unit.id}
                />  
            );
        },
    },
];
