import DataTable from "@/components/DataTableComponents/DataTable";
import { columns } from "./columns";
import ModalTableHeader from "@/components/dashboard/Tables/ModalTableHeader";
import { getAuthenticatedUser } from "@/config/useAuth";
import { BrandForm } from "@/components/Forms/inventory/BrandForm";
import { getOrgBrands } from "@/actions/brand";

export default async function page() {
    const user = await getAuthenticatedUser()

    const orgId = user.orgId    
    const brands = (await getOrgBrands(orgId)) || [];

    return (
        <div className="px-8">
            <ModalTableHeader
                title="Brands"
                linkTitle="Add Brand"
                href="#"
                data={brands}
                model="brand"
                modalForm={<BrandForm orgId={orgId} />}
            />
            <div className="py-8">
                <DataTable columns={columns} data={brands} />
            </div>
        </div>
    );
}
