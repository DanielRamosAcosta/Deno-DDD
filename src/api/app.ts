import { CUSTOMER_REPOSITORY_TOKEN } from "../ollivanders/customers/domain/CustomerRepository.ts";
import { CustomerRepositoryMongo } from "../ollivanders/customers/infrastructure/persistance/CustomerRepositoryMongo.ts";
import { AppBuilder } from "../utils/AppBuilder.ts";
import { CustomerArea } from "./customers/_customers.area.ts";
import { WandArea } from "./wands/_wands.area.ts";

export const app = new AppBuilder([CustomerArea, WandArea])
  .override(CUSTOMER_REPOSITORY_TOKEN)
  .withClass(CustomerRepositoryMongo);
