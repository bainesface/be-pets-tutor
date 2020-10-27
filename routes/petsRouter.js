const petsRouter = require("express").Router();
const { getPetByID } = require("../controllers/pets");

petsRouter.route("/:petID").get(getPetByID);

module.exports = petsRouter;
