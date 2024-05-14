import { getGameById } from "../play/get-game";

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export type GameDto = ThenArg<ReturnType<typeof getGameById>>

export function getCurrentPlayer(game: GameDto) {
    return getCurrentTurn(game).player;
}

export function getCurrentTurn(game: GameDto){
    return game.turns[game.turns.length - 1];
}
