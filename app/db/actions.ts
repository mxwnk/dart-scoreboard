'use server';
import prisma from "@/lib/prisma";

export async function getGameById(id: string) {
    return await prisma.game.findUniqueOrThrow({
        where: { id },
        include: {
            turns: {
                include: {
                    throws: true
                }
            },
            players: true
        }
    });
}

export async function saveDartThrow({ turnId, dartThrow }: { turnId: number, dartThrow: DartThrow }) {
    return await prisma.throw.create({
        data: {
            turnId,
            score: dartThrow.score,
            ring: dartThrow.ring,
        }
    })
}

export async function saveNewTurn({ gameId, playerId, dartThrow }: { gameId: string, playerId: string, dartThrow: DartThrow }) {
    return await prisma.turn.create({
        data: {
            gameId,
            playerId,
            overthrown: false,
            throws: {
                create: [{ ...dartThrow }]
            }
        }, select: {
            id: true,
            overthrown: true,
            playerId: true,
            gameId: true,
            throws: true
        }
    });
}