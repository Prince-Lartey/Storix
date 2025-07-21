import { db } from "@/prisma/db";
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
                data: items,
                pagination: {
                    total: totalItems,
                    pages: totalPages,
                    page,
                    limit,
                },
            }

            return new Response(JSON.stringify(items), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            const items = await db.item.findMany({
                orderBy: {
                    createdAt: "desc",
                },
            });

            return new Response(JSON.stringify(items), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({
            data: null, 
            error: "Failed to get items"
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
 
export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();
  const { name } = body;
 
  // e.g. Insert new user into your DB
  const newUser = { id: Date.now(), name };
 
  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}