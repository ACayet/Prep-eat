const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./docs/swagger.yaml");

router.use("/docs", swaggerUi.serve);
router.get(
  "/docs",
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
  })
);

module.exports = router;
