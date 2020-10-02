import { App, InternalDependencyContainer } from "alosaur";
import { CUSTOMER_REPOSITORY_TOKEN } from "../ollivanders/customers/domain/CustomerRepository.ts";
import { CustomerRepositoryMemory } from "../ollivanders/customers/infrastructure/persistance/CustomerRepositoryMemory.ts";
import { CustomerArea } from "./customers/_customers.area.ts";
import { WandArea } from "./wands/_wands.area.ts";

const container = new InternalDependencyContainer();

container.register(CUSTOMER_REPOSITORY_TOKEN, {
  useClass: CustomerRepositoryMemory,
});

export const app = new App({
  areas: [CustomerArea, WandArea],
  logging: false,
  container,
});
