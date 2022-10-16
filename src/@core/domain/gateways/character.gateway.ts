import { Character } from "@core/domain/entities/Character";

export interface CharacterGateway {
  getCharacters(): Promise<Character[]>;
  getCharacter(id: number): Promise<Character>;
}
