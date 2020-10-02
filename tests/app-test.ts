import { app } from "../src/api/app.ts";
import { CUSTOMER_REPOSITORY_TOKEN } from "../src/ollivanders/customers/domain/CustomerRepository.ts";
import { CustomerRepositoryMemory } from "../src/ollivanders/customers/infrastructure/persistance/CustomerRepositoryMemory.ts";

export const appTest = app
  .override(CUSTOMER_REPOSITORY_TOKEN)
  .withClass(CustomerRepositoryMemory);
