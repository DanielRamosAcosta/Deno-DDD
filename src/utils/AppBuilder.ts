import { App, InternalDependencyContainer } from "alosaur";

export class AppBuilder {
  private container = new InternalDependencyContainer();

  constructor(private areas: Function[]) {}

  override(token: any) {
    const self = this;
    return {
      withClass: (Class: any) => {
        this.container = this.container.register(token, Class);
        return self;
      },
      withValue: (instance: any) => {
        this.container = this.container.registerInstance(token, instance);
        return self;
      },
    };
  }

  build() {
    return new App({
      areas: this.areas,
      logging: false,
      container: this.container,
    });
  }
}
