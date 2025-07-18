import DataTable from "@/components/DataTableComponents/DataTable";
import { columns } from "./columns";
import ModalTableHeader from "@/components/dashboard/Tables/ModalTableHeader";
import { getAuthenticatedUser } from "@/config/useAuth";
import { UnitForm } from "@/components/Forms/inventory/UnitForm";
import { getOrgUnits } from "@/actions/units";

export default async function page() {
    const user = await getAuthenticatedUser()

    const orgId = user.orgId    
    const units = (await getOrgUnits(orgId)) || [];

    return (
        <div className="px-8">
            <ModalTableHeader
                title="Units"
                linkTitle="Add Unit"
                href="#"
                data={units}
                model="unit"
                modalForm={<UnitForm orgId={orgId} />}
            />
            <div className="py-8">
                <DataTable columns={columns} data={units} />
            </div>
        </div>
    );
}
