import { BadRequestError, Body } from "alosaur";

function validate(ModelSchema: any) {
  const validator = ModelSchema.destruct();

  return function (body: Uint8Array) {
    const [error, model] = validator(
      JSON.parse(new TextDecoder("utf-8").decode(body))
    );

    if (error) {
      throw new BadRequestError(error.message);
    }

    return model;
  };
}

export const ValidatedBody = (schema: any) => Body(validate(schema));
