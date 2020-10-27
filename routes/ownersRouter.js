const ownersRouter = require("express").Router();
const {
  getOwners,
  getOwnerByID,
  patchOwner,
  postOwner,
} = require("../controllers/owners");
const { getPetsByOwner } = require("../controllers/pets");

ownersRouter.route("/").get(getOwners).post(postOwner);

ownersRouter.route("/:ownerID").get(getOwnerByID).patch(patchOwner);

ownersRouter.route("/:ownerID/pets").get(getPetsByOwner);

module.exports = ownersRouter;
