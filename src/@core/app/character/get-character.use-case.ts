import { Character } from "@core/domain/entities/Character";
import { CharacterGateway } from "@core/domain/gateways/character.gateway";

export class GetCharacterUseCase {
  constructor(private characterGateway: CharacterGateway) {}

  async execute(id: number): Promise<Character> {
    return this.characterGateway.getCharacter(id);
  }
}
