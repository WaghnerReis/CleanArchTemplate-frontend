export type OriginProps = {
  name: string;
};

export class Origin {
  constructor(private props: OriginProps) {}

  get name(): string {
    return this.props.name;
  }
}
