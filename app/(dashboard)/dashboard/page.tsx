import { getDashboardOverview } from "@/actions/analytics";
import DashboardMain from "@/components/dashboard/DashboardMain";
import DefaultUserDashboard from "@/components/dashboard/DefaultUserDashboard";
import OverViewCard from "@/components/OverViewCard";
import { DashboardWelcome } from "@/components/WelcomeBanner";
import { getAuthenticatedUser } from "@/config/useAuth";

export default async function Dashboard() {
    const analytics = (await getDashboardOverview()) || [];
    const user = await getAuthenticatedUser();
    const userPermission = user.permissions
    const hasPermission = userPermission.includes("dashboard.read")

    if (!hasPermission) {
        return (
            <DefaultUserDashboard user={user} />
        )
    }

    return (
        <main className="px-8">
            <div className="space-y-6">
                {/* <div className="space-y-1 mb-3">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Org Name: {user.orgName}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Org Id: {user.orgId}
                    </p>
                </div> */}

                {/* <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    {analytics.map((item, i) => (
                        <OverViewCard item={item} key={i} />
                    ))}
                </div> */} 
            </div>
            <DashboardMain />
        </main>
    );
}
