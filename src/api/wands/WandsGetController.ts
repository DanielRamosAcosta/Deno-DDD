import { Controller, Get } from "alosaur";
import { WandsLister } from "../../ollivanders/wands/application/WandsLister.ts";

@Controller()
export class WandsGetController {
  constructor(private wandsLister: WandsLister) {}

  @Get("/wands")
  async execute() {
    // TODO: Should get all the wands
    return await this.wandsLister.execute();
  }
}
