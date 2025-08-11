import { getOrgApiKeys } from "@/actions/apiKeys";
import { ApiKeyManagement } from "@/components/dashboard/ApiKeyManagement";
import { getAuthenticatedUser } from "@/config/useAuth";

export default async function Page() {
    const user = await getAuthenticatedUser();
    const apiKeys = await getOrgApiKeys(user.orgId);

    return (
        <main className="container mx-auto py-8 px-4">
            <ApiKeyManagement orgKeys={apiKeys} />
        </main>
    );
}