export const validateSchema = (schema, value) => (req, res, next) => {
  try {
    if (value) {
      schema.parse(value);
    } else {
      schema.parse(req.body);
    }
    next();
  } catch (error) {
    return res.status(400).json(error.errors.map((error) => error.message));
  }
};
