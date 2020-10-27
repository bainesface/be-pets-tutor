const {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById,
} = require("../models/pets.js");

const getPetsByOwner = (req, res) => {
  const { ownerID } = req.params;
  fetchPetsByOwnerId(ownerID, (err, pets) => {
    if (err) res.send({ err });
    res.status(200).send({ pets });
  });
};

const getPetByID = (req, res) => {
  const { petID } = req.params;
  fetchPetById(petID, (err, pet) => {
    if (err) res.send({ err });
    res.status(200).send({ pet });
  });
};

module.exports = { getPetsByOwner, getPetByID };
