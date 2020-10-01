import { Area } from "alosaur";
import { WandGetController } from "./WandGetController.ts";
import { WandsGetController } from "./WandsGetController.ts";

@Area({
  controllers: [WandsGetController, WandGetController],
})
export class WandArea {}
