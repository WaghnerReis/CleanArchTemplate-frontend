import { Character } from "@core/domain/entities/Character";
import { CharacterGateway } from "@core/domain/gateways/character.gateway";

export class GetCharactersUseCase {
  constructor(private characterGateway: CharacterGateway) {}

  async execute(): Promise<Character[]> {
    return this.characterGateway.getCharacters();
  }
}
