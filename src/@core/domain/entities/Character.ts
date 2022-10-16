import { LocationProps } from "./Location";
import { OriginProps } from "./Origin";

export type CharacterProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: OriginProps;
  location: LocationProps;
};

export class Character {
  constructor(private props: CharacterProps) {}

  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get status(): string {
    return this.props.status;
  }

  get species(): string {
    return this.props.species;
  }

  get origin(): OriginProps {
    return this.props.origin;
  }

  get location(): LocationProps {
    return this.props.location;
  }
}
