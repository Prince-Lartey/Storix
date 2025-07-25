import RegisterInvitedUserForm from "@/components/Forms/RegisterInvitedUserForm";
import { GridBackground } from "@/components/reusable-ui/grid-background";
import React from "react";

export default async function Page({params, searchParams}: {params: Promise<{ orgId: string }>; searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {
    const { orgId } = await params
    const email = (await searchParams).email as string
    const roleId = (await searchParams).roleId as string
    const orgName = (await searchParams).orgName as string

    return (
        <GridBackground>
            <div className="px-4">
                <RegisterInvitedUserForm orgId={orgId} userEmail={email} orgName={orgName} roleId={roleId} />
            </div>
        </GridBackground>
    );
}
