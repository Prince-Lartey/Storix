import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import ModalTableHeader from "@/components/dashboard/Tables/ModalTableHeader";
import { getAuthenticatedUser } from "@/config/useAuth";
import { ItemForm } from "@/components/Forms/inventory/ItemForm";
import { getOrgBriefItems } from "@/actions/items";

export default async function page() {
    const user = await getAuthenticatedUser()
    
    const orgId = user.orgId    
    const res = (await getOrgBriefItems(orgId)) || [];
    const items = res.data.data

    return (
        <div className="px-8">
            <ModalTableHeader
                title="Items"
                linkTitle="Add Item"
                href="#"
                data={items}
                model="item"
                modalForm={<ItemForm orgId={orgId} />}
            />
            <div className="py-8">
                <DataTable data={items} columns={columns} />
            </div>
        </div>
    );
}
