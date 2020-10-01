import { Controller, Post } from "alosaur";
import { CustomerRegistar } from "../../ollivanders/customers/application/CustomerRegistrar.ts";

@Controller()
export class CustomerPostController {
  constructor(private customerRegistar: CustomerRegistar) {}

  @Post("/customers")
  async execute() {
    await this.customerRegistar.execute();
    return {
      status: "OK",
    };
  }
}
