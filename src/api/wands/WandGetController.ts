import { Controller, Get } from "alosaur";
import { WandGetter } from "../../ollivanders/wands/application/WandGetter.ts";

@Controller()
export class WandGetController {
  constructor(private wandGetter: WandGetter) {}

  @Get("/wands/:id")
  async execute() {
    return await this.wandGetter.execute();
  }
}
