import { Area } from "alosaur";
import { CustomerPostController } from "./CustomerPostController.ts";

@Area({
  controllers: [CustomerPostController],
})
export class CustomerArea {}
