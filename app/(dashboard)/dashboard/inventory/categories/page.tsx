import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import { getOrgCategories } from "@/actions/categories";
import ModalTableHeader from "@/components/dashboard/Tables/ModalTableHeader";
import { getAuthenticatedUser } from "@/config/useAuth";
import { CategoryFormModal } from "@/components/Forms/inventory/CategoryFormModal";

export default async function page() {
    const user = await getAuthenticatedUser()
    
    const orgId = user.orgId    
    const categories = (await getOrgCategories(orgId)) || [];

    return (
        <div className="p-8">
            <ModalTableHeader
                    title="Categories"
                    linkTitle="Add Category"
                    href="#"
                    data={categories}
                    model="brand"
                    modalForm={<CategoryFormModal orgId={orgId} />}
                />
            <div className="py-8">
                <DataTable data={categories} columns={columns} />
            </div>
        </div>
    );
}
