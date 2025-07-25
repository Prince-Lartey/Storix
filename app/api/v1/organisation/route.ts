import { generateSlug } from "@/lib/generateSlug";
import { db } from "@/prisma/db";
import { ItemCreateDTO } from "@/types/itemTypes";

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