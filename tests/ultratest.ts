import { App } from "alosaur";
import { expect } from "expect";

type Response = {
  body: any;
  status: number;
};

type StatusArgs = [status: number];
type ContentTypeArgs = [header: string, regexOrValue: RegExp | number | string];
type AllArgs = StatusArgs | ContentTypeArgs;

function isStatusArgs(args: AllArgs): args is StatusArgs {
  return typeof args[0] === "number";
}

function isContentTypeArgs(args: AllArgs): args is ContentTypeArgs {
  return args[1] != null;
}

class Test {
  private validations = [] as Array<(response: globalThis.Response) => void>;

  constructor(private responsePromise: Promise<globalThis.Response>) {}

  expect(...args: AllArgs) {
    if (isStatusArgs(args)) this.expectStatus(args);
    if (isContentTypeArgs(args)) this.expectContentType(args);

    return this;
  }

  private expectStatus([expectedStatus]: StatusArgs) {
    this.validations.push((response) => {
      expect(response.status).toBe(expectedStatus);
    });
  }

  private expectContentType([headerName, regexOrValue]: ContentTypeArgs) {
    if (regexOrValue instanceof RegExp) {
      this.validations.push((response) => {
        const headerValue = response.headers.get(headerName);
        expect(headerValue).toMatch(regexOrValue);
      });
    } else {
      this.validations.push((response) => {
        const headerValue = response.headers.get(headerName);
        expect(headerValue).toEqual(regexOrValue);
      });
    }
  }

  async json(): Promise<Response> {
    const response = await this.responsePromise;

    for (const validation of this.validations) {
      validation(response);
    }

    const data = await response.json();

    return {
      body: data,
      status: response.status,
    };
  }
}

class Megatest {
  get(path: string): Test {
    return new Test(fetch(`http://localhost:22345${path}`));
  }

  post(path: string, body?: any): Test {
    return new Test(
      fetch(`http://localhost:22345${path}`, {
        method: "POST",
        body: JSON.stringify(body),
      })
    );
  }
}

export function testMy(app: App<unknown>) {
  return new Megatest();
}

export function w(app: App<unknown>, fn: (app: App<unknown>) => Promise<void>) {
  return async function () {
    app.listen({ hostname: "0.0.0.0", port: 22345 });

    try {
      await fn(app);
    } catch (error) {
      app.close();
      throw error;
    }
    app.close();
  };
}
