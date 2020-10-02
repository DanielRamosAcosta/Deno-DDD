import { Wand } from "../domain/Wand.ts";

export class WandGetter {
  async execute(): Promise<Wand> {
    // TODO: Should get a wand
    return new Wand(25);
  }
}
