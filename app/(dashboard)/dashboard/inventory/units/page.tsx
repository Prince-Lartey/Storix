import DataTable from "@/components/DataTableComponents/DataTable";
import { columns } from "./columns";
import { getOrgInvites, getOrgUsers } from "@/actions/users";
import ModalTableHeader from "@/components/dashboard/Tables/ModalTableHeader";
import { getAuthenticatedUser } from "@/config/useAuth";
import { getOrgRoles } from "@/actions/roles";
import { UnitForm } from "@/components/Forms/inventory/UnitForm";

export default async function page() {
    const user = await getAuthenticatedUser()

    const orgId = user.orgId
    const orgName = user?.orgName ?? ""
    
    const users = (await getOrgUsers(orgId)) || [];
    const invites = (await getOrgInvites(orgId)) || [];
    const res = await getOrgRoles(orgId)
    const roleData = res.data || []
    const roles = roleData.map((role) => {
        return {
            label: role.displayName,
            value: role.id
        }
    })

    return (
        <div className="p-8">
            <ModalTableHeader
                title="Units"
                linkTitle="Add Unit"
                href="#"
                data={users}
                model="unit"
                modalForm={<UnitForm roles={roles} orgId={orgId} orgName={orgName} />}
            />
            <DataTable columns={columns} data={users} />
        </div>
    );
}
