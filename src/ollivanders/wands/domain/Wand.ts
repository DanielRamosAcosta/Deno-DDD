type WandPrimitives = ReturnType<Wand["toPrimitives"]>;

export class Wand {
  static fromPrimitives(primitives: WandPrimitives) {
    return new Wand(primitives.length);
  }

  constructor(private length: number) {}

  toPrimitives() {
    return {
      length: this.length,
    };
  }
}
