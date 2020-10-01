type CustomerPrimitives = ReturnType<Customer["toPrimitives"]>;

export class Customer {
  static fromPrimitives(primitives: CustomerPrimitives) {
    return new Customer(primitives.length);
  }

  constructor(private name: string) {}

  toPrimitives() {
    return {
      length: this.name,
    };
  }
}
