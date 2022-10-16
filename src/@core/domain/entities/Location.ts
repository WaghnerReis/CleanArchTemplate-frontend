export type LocationProps = {
  name: string;
};

export class Location {
  constructor(private props: LocationProps) {}

  get name(): string {
    return this.props.name;
  }
}
