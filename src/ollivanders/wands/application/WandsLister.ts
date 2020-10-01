import { Wand } from "../domain/Wand.ts";

export class WandsLister {
  async execute(): Promise<Wand[]> {
    console.log("Should get a list of wands");
    return [];
  }
}
