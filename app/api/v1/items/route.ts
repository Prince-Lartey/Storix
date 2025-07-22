import { generateSlug } from "@/lib/generateSlug";
import { db } from "@/prisma/db";
import { ItemCreateDTO } from "@/types/itemTypes";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
        // Parse pagination parameter from URL
        const searchParams = request.nextUrl.searchParams;
        const pageParams = searchParams.get("page");
        const limitParams = searchParams.get("limit");

        // Check if pagination is requested
        const isPaginated = pageParams !== null && limitParams !== null;

        // If pagination is requested, parse the parameters
        if (isPaginated) {
            const page = parseInt(pageParams || "1")
            const limit = parseInt(limitParams || "10");
            const skip = (page - 1) * limit;

            const items = await db.item.findMany({
                orderBy: {
                    createdAt: "desc",
                },
                skip,
                take: limit,
            });

            const totalItems = await db.item.count();

            const totalPages = Math.ceil(totalItems / limit);

            // Return paginated response
            const response = {
                success: true,
                data: {
                    data: items,
                    pagination: {
                        total: totalItems,
                        pages: totalPages,
                        page,
                        limit,
                    },
                },
                error: null
            }

            return new Response(JSON.stringify(response), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            const items = await db.item.findMany({
                orderBy: {
                    createdAt: "desc",
                },
            });

            // construct response with just data
            const response = {
                success: true,
                data: items,
                pagination: {
                    total: items.length,
                    pages: 1,
                    page: 1,
                    limit: items.length,
                },
                error: null
            }

            return new Response(JSON.stringify(response), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({
            data: null, 
            error: "Failed to get items",
            success: false
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
 
export async function POST(request: Request) {
    try {
        // Parse the request body
        const data: ItemCreateDTO = await request.json();
        const slug = generateSlug(data.name)

        const existingItem = await db.item.findUnique({
            where: {
                slug,
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

        data.slug = slug;
        
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