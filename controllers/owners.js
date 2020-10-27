const {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
} = require("../models/owners.js");

const getOwners = (req, res) => {
  fetchAllOwners((err, allOwners) => {
    if (err) res.send({ err });
    res.status(200).send({ allOwners });
  });
};

const getOwnerByID = (req, res) => {
  const { ownerID } = req.params;
  fetchOwnerById(ownerID, (err, owner) => {
    if (err) res.send({ err });
    res.status(200).send({ owner });
  });
};

const patchOwner = (req, res) => {
  const { ownerID } = req.params;
  const updatedInfo = req.body;
  updateOwner(ownerID, updatedInfo, (err, updatedOwner) => {
    if (err) res.send({ err });
    const parsedOwner = JSON.parse(updatedOwner);
    res.status(200).send({ updatedOwner: parsedOwner });
  });
};

const postOwner = (req, res) => {
  const ownerToAdd = req.body;
  createOwner(ownerToAdd, (err, addedOwner) => {
    if (err) res.send({ err });
    res.status(201).send({ addedOwner });
  });
};

module.exports = { getOwners, getOwnerByID, patchOwner, postOwner };
