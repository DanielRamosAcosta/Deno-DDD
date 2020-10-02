import { Name } from "./Name.ts";

type CustomerPrimitives = ReturnType<Customer["toPrimitives"]>;

export class Customer {
  static fromPrimitives(primitives: CustomerPrimitives) {
    return new Customer(new Name(primitives.name));
  }

  constructor(private name: Name) {}

  toPrimitives() {
    return {
      name: this.name.value,
    };
  }
}
