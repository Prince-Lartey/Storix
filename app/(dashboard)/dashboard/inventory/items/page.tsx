import React, { Suspense } from "react";
import { getAuthenticatedUser } from "@/config/useAuth";
import { getOrgBriefItems } from "@/actions/items";
import { TableLoading } from "@/components/ui/data-table";
import ItemListing from "@/components/dashboard/items/item-listing";

export default async function page() {
    const user = await getAuthenticatedUser()
    
    const orgId = user.orgId    
    const res = (await getOrgBriefItems(orgId)) || [];
    const items = res.data.data

    return (
        <div className="container py-8">
            <Suspense fallback={<TableLoading title="Item Inventory" />}>
                <ItemListing orgId={orgId} title="Item Inventory" />
            </Suspense>
        </div>
    );
}
