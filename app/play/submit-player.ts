'use server';
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitPlayer(formData: FormData) {
    const name = formData.get("name") as string;
    await prisma.player.create({ data: { name } });
    revalidatePath("/play");
}
