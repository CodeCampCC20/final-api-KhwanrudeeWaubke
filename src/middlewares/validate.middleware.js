import * as Yup from "yup";
import createError from "../utils/create-error";


const validatorMiddleware = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = error.inner.reduce((acc, cur) => {
          if (cur.path) {
            acc[cur.path] = cur.message;
          }
          return acc;
        }, {});

        // console.log("validationErrors", validationErrors);

        createError(400, "validation error", validationErrors);
      }

      next(error);
    }
  };
};

export default validatorMiddleware;