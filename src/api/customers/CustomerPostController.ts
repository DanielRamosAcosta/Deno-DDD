import { Controller, Post } from "alosaur";
import Schema, { string, Type } from "computed-types";
import { CustomerRegistar } from "../../ollivanders/customers/application/CustomerRegistrar.ts";
import { Name } from "../../ollivanders/customers/domain/Name.ts";
import { ValidatedBody } from "../../utils/ValidatedBody.ts";

const CustomerDtoSchema = Schema({
  name: string.trim().normalize().between(3, 40),
});

type CustomerDto = Type<typeof CustomerDtoSchema>;

@Controller()
export class CustomerPostController {
  constructor(private customerRegistar: CustomerRegistar) {}

  @Post("/customers")
  async execute(@ValidatedBody(CustomerDtoSchema) body: CustomerDto) {
    await this.customerRegistar.execute(new Name(body.name));

    return {
      status: "OK",
    };
  }
}
