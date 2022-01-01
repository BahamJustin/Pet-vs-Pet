const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");
const seedVotes = require("./vote-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("Database Created");

  await seedUsers();
  console.log("Users Seeded");

  await seedPosts();
  console.log("Posts Seeded");

  await seedComments();
  console.log("Comments Seeded");

  await seedVotes();
  console.log("Votes Seeded");

  process.exit(0);
};

seedAll();
