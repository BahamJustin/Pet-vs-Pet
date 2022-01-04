const { Vote } = require("../models");

const voteSeed = [];

const seedVotes = () => Vote.bulkCreate(voteSeed);

module.exports = seedVotes;