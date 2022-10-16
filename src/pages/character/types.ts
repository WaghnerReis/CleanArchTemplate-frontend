import { Character } from "@core/domain/entities/Character";

export type CharacterPageProps = {
  characters: Character[];
};
export type CharacterDetailPageProps = {
  character: Character;
};
