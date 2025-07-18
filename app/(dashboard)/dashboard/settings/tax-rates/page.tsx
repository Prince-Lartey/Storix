import DataTable from "@/components/DataTableComponents/DataTable";
import { columns } from "./columns";
import ModalTableHeader from "@/components/dashboard/Tables/ModalTableHeader";
import { getAuthenticatedUser } from "@/config/useAuth";
import { TaxRateForm } from "@/components/Forms/settings/TaxRateForm";
import { getOrgTaxes } from "@/actions/tax";

export default async function page() {
    const user = await getAuthenticatedUser()

    const orgId = user.orgId    
    const taxes = (await getOrgTaxes(orgId)) || [];

    return (
        <div className="px-8">
            <ModalTableHeader
                title="Tax Rates"
                linkTitle="Add Tax"
                href="#"
                data={taxes}
                model="tax"
                modalForm={<TaxRateForm orgId={orgId} />}
            />
            <div className="py-8">
                <DataTable columns={columns} data={taxes} />
            </div>
        </div>
    );
}
