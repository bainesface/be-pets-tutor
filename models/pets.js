const fs = require("fs");

const createPet = (ownerId, data, cb) => {};

const fetchPetById = (id, cb) => {
  fs.readFile(`./data/pets/${id}.json`, "utf8", (err, pet) => {
    const fetchedPet = JSON.parse(pet);
    cb(null, fetchedPet);
  });
};

const fetchPetsByOwnerId = (ownerId, cb) => {
  fs.readdir("./data/pets", (err, pets) => {
    const ownerPets = [];
    let count = 0;
    pets.forEach((pet) => {
      fs.readFile(`./data/pets/${pet}`, "utf8", (err, petsPerFile) => {
        count++;
        const petsObj = JSON.parse(petsPerFile);
        if (petsObj.owner === ownerId) ownerPets.push(petsObj);
        if (count === pets.length) cb(null, ownerPets);
      });
    });
  });
};

const deletePetById = (id, cb) => {};

module.exports = {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById,
};
