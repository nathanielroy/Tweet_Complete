const producer = require("../kafka/producer");

exports.allAccess = (_req, res) => {
  producer("Public Content.");
  res.status(200).send("Public Content.");
};

exports.userBoard = (_req, res) => {
  producer("User Content.");
  res.status(200).send("User Content.");
};

exports.adminBoard = (_req, res) => {
  producer("Admin Content.");
  res.status(200).send("Admin Content.");
};

exports.postBoard = (_req, res) => {
  producer("post Content.");
  res.status(200).send("post Content.");
};
