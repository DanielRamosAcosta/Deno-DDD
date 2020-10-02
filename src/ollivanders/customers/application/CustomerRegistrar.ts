import { Inject, Injectable } from "alosaur";
import { Customer } from "../domain/Customer.ts";
import {
  CustomerRepository,
  CUSTOMER_REPOSITORY_TOKEN,
} from "../domain/CustomerRepository.ts";
import { Name } from "../domain/Name.ts";

@Injectable()
export class CustomerRegistar {
  constructor(
    @Inject(CUSTOMER_REPOSITORY_TOKEN)
    private customerRepository: CustomerRepository
  ) {}

  async execute(name: Name): Promise<void> {
    const customer = new Customer(name);
    await this.customerRepository.save(customer);
  }
}
