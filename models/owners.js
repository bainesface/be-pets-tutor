const fs = require("fs");

const createOwner = (data, cb) => {
  fs.readdir("./data/owners", (err, owners) => {
    const createdOwnerID = `o${owners.length + 1}`;
    data.id = createdOwnerID;
    const stringyData = JSON.stringify(data);
    fs.writeFile(`./data/owners/${createdOwnerID}.json`, stringyData, (err) => {
      if (err) cb(err);
      cb(null, data);
    });
  });
};

const fetchAllOwners = (cb) => {
  fs.readdir("./data/owners", (err, owners) => {
    const allOwners = [];
    let count = 0;

    owners.forEach((owner) => {
      fs.readFile(`./data/owners/${owner}`, "utf8", (err, owner) => {
        count++;
        const fetchedOwner = JSON.parse(owner);
        allOwners.push(fetchedOwner);
        if (count === owners.length) cb(null, allOwners);
      });
    });
  });
};

const fetchOwnerById = (id, cb) => {
  fs.readFile(`./data/owners/${id}.json`, "utf8", (err, owner) => {
    const fetchedOwner = JSON.parse(owner);
    cb(null, fetchedOwner);
  });
};

const updateOwner = (id, data, cb) => {
  fs.readFile(`./data/owners/${id}.json`, "utf8", (err, owner) => {
    const parsedOwner = JSON.parse(owner);
    parsedOwner.name = data.name;
    parsedOwner.age = data.age;

    const updatedOwner = JSON.stringify(parsedOwner);
    fs.writeFile(`./data/owners/${id}.json`, updatedOwner, (err) => {
      if (err) cb(err);
      cb(null, updatedOwner);
    });
  });
};

const deleteOwnerById = (id, cb) => {};

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
};
