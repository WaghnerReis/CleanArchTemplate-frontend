import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Registry, container } from "@core/infra/container-registry";

import { CharacterDetailPageProps } from "./types";
import { GetCharacterUseCase } from "@core/app/character/get-character.use-case";

const CharacterDetailPage: NextPage<CharacterDetailPageProps> = ({
  character,
}) => {
  return (
    <>
      {character ? (
        <div>
          <span>{character.id}</span>
          <span>{character.name}</span>
          <span>{character.species}</span>
          <span>{character.status}</span>
          <br />
          <span>{character.origin.name}</span>
          <span>{character.location.name}</span>
        </div>
      ) : (
        <span>Carregando...</span>
      )}
    </>
  );
};

export default CharacterDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params || {};
  const useCase = container.get<GetCharacterUseCase>(
    Registry.GetCharacterUseCase
  );
  const character = await useCase.execute(+id!);
  return {
    props: {
      character,
    },
  };
};
