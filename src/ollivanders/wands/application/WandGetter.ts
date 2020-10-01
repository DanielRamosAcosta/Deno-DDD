import { Wand } from "../domain/Wand.ts";

export class WandGetter {
  async execute(): Promise<Wand> {
    console.log("Should get a wand");
    return new Wand(25);
  }
}
