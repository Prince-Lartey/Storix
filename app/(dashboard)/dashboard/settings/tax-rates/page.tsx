import DataTable from "@/components/DataTableComponents/DataTable";
import { columns } from "./columns";
import ModalTableHeader from "@/components/dashboard/Tables/ModalTableHeader";
import { getAuthenticatedUser } from "@/config/useAuth";
import { UnitForm } from "@/components/Forms/inventory/UnitForm";
import { getOrgUnits } from "@/actions/units";
import { TaxRateForm } from "@/components/Forms/settings/TaxRateForm";
import { getOrgTaxes } from "@/actions/tax";

export default async function page() {
    const user = await getAuthenticatedUser()

    const orgId = user.orgId    
    const taxes = (await getOrgTaxes(orgId)) || [];

    return (
        <div className="p-8">
            <ModalTableHeader
                title="Tax Rates"
                linkTitle="Add Tax"
                href="#"
                data={taxes}
                model="tax"
                modalForm={<TaxRateForm orgId={orgId} />}
            />
            <DataTable columns={columns} data={taxes} />
        </div>
    );
}
