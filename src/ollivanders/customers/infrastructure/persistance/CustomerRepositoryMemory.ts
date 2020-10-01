import { Customer } from "../../domain/Customer.ts";
import { CustomerRepository } from "../../domain/CustomerRepository.ts";

export class CustomerRepositoryMemory implements CustomerRepository {
  async save(customer: Customer): Promise<void> {}
}
