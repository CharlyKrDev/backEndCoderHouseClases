import EErrors from "../services/enum.js";

const errorHandler = (error, req, res, next) => {
  console.log(error.cause);
  switch (error.code) {
    case EErrors.PRODUCT_CREATION_ERROR:
      res.status(400).json({
        status: "error",
        error: error.name,
        message: error.message,
        details: error.details
      });
      break;

    default:
      res.status(500).json({
        status: "error",
        error: "Error no manejado",
        message: error.message,
        details: error.details
      });
      break;
  }
};

export default errorHandler;
