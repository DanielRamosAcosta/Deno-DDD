import { Customer } from "../../domain/Customer.ts";
import { CustomerRepository } from "../../domain/CustomerRepository.ts";

export class CustomerRepositoryMongo implements CustomerRepository {
  async save(customer: Customer): Promise<void> {
    throw new Error("Unimplemented");
  }
}
