import { db } from "@/prisma/db";
import { ItemFormProps } from "@/types/itemTypes";

export async function GET(request: Request) {
    try {
        const organisations = await db.organisation.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return new Response(JSON.stringify(organisations), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
       console.log(error);
        return new Response(JSON.stringify({
            data: null, 
            error: "Failed to get organisation"
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
 
export async function POST(request: Request) {
    try {
        // Parse the request body
        const data: ItemFormProps = await request.json();
        const { name, slug, sku, costPrice, sellingPrice, orgId, thumbnail } = data;

        const existingItem = await db.item.findUnique({
            where: {
                slug: data.slug,
                orgId: data.orgId,
            },
        });

        if (existingItem) {
            return new Response(JSON.stringify({
                data: null,
                error: "Item already exist",
            }),{
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            })
        }
        
        const newItem = await db.item.create({
            data,
        });
    
        return new Response(JSON.stringify({
            data: newItem, 
            error: null
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({
            data: null, 
            error: "Failed to create item"
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}