import { Customer } from "./Customer.ts";

export const CUSTOMER_REPOSITORY_TOKEN = Symbol("CustomerRepository");

export interface CustomerRepository {
  save(customer: Customer): Promise<void>;
}
