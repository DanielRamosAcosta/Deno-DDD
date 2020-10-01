import { Inject, Injectable } from "alosaur";
import {
  CustomerRepository,
  CUSTOMER_REPOSITORY_TOKEN,
} from "../domain/CustomerRepository.ts";

@Injectable()
export class CustomerRegistar {
  constructor(
    @Inject(CUSTOMER_REPOSITORY_TOKEN)
    private customerRepository: CustomerRepository
  ) {}

  async execute(): Promise<void> {
    console.log("hello", this.customerRepository);
    console.log("Should persist the customer");
  }
}
