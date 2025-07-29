import { getAuthenticatedUser } from "@/config/useAuth";
import { generateApiKey } from "@/lib/generateApiKeys";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

interface APIKeyCreateDTO {
    name: string;
}

export async function createApiKey(name: string) {
    try {
        const user = await getAuthenticatedUser();
        if (!user) {
            return {
                success: false,
                data: null,
                error: "Your Not Authorized",
            };
        }

        const apiKey = generateApiKey();

        const existingKey = await db.apiKey.findUnique({
            where: { key: apiKey },
        });

        if (existingKey) {
            return {
                success: false,
                data: null,
                error: "This Key Already exists",
            };
        }
        
        console.log(apiKey);

        const newApiKey = await db.apiKey.create({
            data: {
                orgId: user.orgId,
                key: apiKey,
                name
            },
        });
        revalidatePath("/dashboard/integrations/api");

        return {
            success: true,
            data: newApiKey,
            error: null,
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            data: null,
            error: "Something went wrong",
        };
    }
}