import { GetServerSideProps, NextPage } from "next";
import { Registry, container } from "@core/infra/container-registry";

import { CharacterPageProps } from "./types";
import { GetCharactersUseCase } from "@core/app/character/get-characters.use-case";
import Link from "next/link";

const CharacterPage: NextPage<CharacterPageProps> = ({ characters }) => {
  return (
    <>
      {characters ? (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <Link href={`/character/${character.id}`}>
                <a>{character.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <span>Carregando...</span>
      )}
    </>
  );
};

export default CharacterPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useCase = container.get<GetCharactersUseCase>(
    Registry.GetCharactersUseCase
  );
  const characters = await useCase.execute();

  return {
    props: {
      characters,
    },
  };
};
