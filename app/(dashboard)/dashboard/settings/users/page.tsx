import DataTable from "@/components/DataTableComponents/DataTable";
import { columns } from "./columns";
import { getOrgInvites, getOrgUsers } from "@/actions/users";
import ModalTableHeader from "@/components/dashboard/Tables/ModalTableHeader";
import { getAuthenticatedUser } from "@/config/useAuth";
import { getOrgRoles } from "@/actions/roles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InvitesTable from "@/components/dashboard/Tables/InvitesTable";
import UserInvitationForm from "@/components/Forms/users/userInvitationForm";

export default async function Page() {
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
        <div className="px-8">
            <Tabs defaultValue="users" className="space-y-8">
                <TabsList className="inline-flex h-auto w-full justify-start gap-4 rounded-none border-b bg-transparent p-0 flex-wrap">
                    {["users", "invites"].map((feature) => {
                        return (
                        <TabsTrigger
                            key={feature}
                            value={feature}
                            className="inline-flex items-center gap-2 border-b-2 border-transparent px-8 pb-3 pt-2 data-[state=active]:border-primary capitalize"
                        >
                            {feature.split("-").join(" ")}
                        </TabsTrigger>
                        );
                    })}
                </TabsList>
                <TabsContent value="users" className="space-y-8">
                    <ModalTableHeader
                        title="Users"
                        linkTitle="Add User"
                        href="/dashboard/users/new"
                        data={users}
                        model="user"
                        modalForm={<UserInvitationForm roles={roles} orgId={orgId} orgName={orgName} />}
                    />
                    <DataTable columns={columns} data={users} />
                </TabsContent>
                <TabsContent value="invites" className="space-y-8">
                    <InvitesTable data={invites}/>
                </TabsContent>
            </Tabs>
        </div>
    );
}
