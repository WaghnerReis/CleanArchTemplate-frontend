import { AxiosInstance } from "axios";
import { Character } from "@core/domain/entities/Character";
import { CharacterGateway } from "@core/domain/gateways/character.gateway";

type GetCharactersResponse = {
  results: Character[];
};

export class CharacterHttpGateway implements CharacterGateway {
  constructor(private http: AxiosInstance) {}

  async getCharacters(): Promise<Character[]> {
    const {
      data: { results },
    } = await this.http.get<GetCharactersResponse>("/character");

    return results;
  }

  async getCharacter(id: number): Promise<Character> {
    const { data } = await this.http.get<Character>(`/character/${id}`);

    return data;
  }
}
