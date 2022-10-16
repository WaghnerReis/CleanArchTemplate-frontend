import { CharacterHttpGateway } from "./gateways/character-http.gateway";
import { Container } from "inversify";
import { GetCharacterUseCase } from "@core/app/character/get-character.use-case";
import { GetCharactersUseCase } from "@core/app/character/get-characters.use-case";
import { client } from "./client";

export const Registry = {
  AxiosAdapter: Symbol.for("AxiosAdapter"),

  CharacterGateway: Symbol.for("CharacterGateway"),

  GetCharactersUseCase: Symbol.for("GetCharactersUseCase"),
  GetCharacterUseCase: Symbol.for("GetCharacterUseCase"),
};

export const container = new Container();

container.bind(Registry.AxiosAdapter).toConstantValue(client);

// GATEWAYS
container.bind(Registry.CharacterGateway).toDynamicValue((context) => {
  return new CharacterHttpGateway(context.container.get(Registry.AxiosAdapter));
});

// USE CASES
container.bind(Registry.GetCharactersUseCase).toDynamicValue((context) => {
  return new GetCharactersUseCase(
    context.container.get(Registry.CharacterGateway)
  );
});

container.bind(Registry.GetCharacterUseCase).toDynamicValue((context) => {
  return new GetCharacterUseCase(
    context.container.get(Registry.CharacterGateway)
  );
});
