"use client";

import { ColumnDef } from "@tanstack/react-table";

import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { BrandDTO } from "@/types/types";

export const columns: ColumnDef<BrandDTO>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => <SortableColumn column={column} title="Name" />,
    },
    // {
    //     accessorKey: "symbol",
    //     header: ({ column }) => <SortableColumn column={column} title="Symbol" />,
    // },

    // {
    //   accessorKey: "createdAt",
    //   header: "Date Created",
    //   cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
    // },
    {
        id: "actions",
        accessorKey: "Action",
        cell: ({ row }) => {
            const brand = row.original;
            return (
                <ActionColumn
                    row={row}
                    model="brand"
                    editEndpoint={""}
                    id={brand.id}
                />  
            );
        },
    },
];
