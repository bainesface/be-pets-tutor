const apiRouter = require("express").Router();
const ownersRouter = require("./ownersRouter");
const petsRouter = require("./petsRouter");

apiRouter.use("/owners", ownersRouter);

apiRouter.use("/pets", petsRouter);

module.exports = apiRouter;
