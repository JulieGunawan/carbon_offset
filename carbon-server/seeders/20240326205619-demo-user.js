'use strict';
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcryptjs");

const hash = async (password) => bcrypt.hash(password, 10);
const newArray = (length) => (map) =>
    Promise.all(Array.from({ length }).map(() => map()));

const genT = async (overrides) => {
  const fName = faker.person.firstName();
  const lName = faker.person.lastName();
  const name = fName + " " + lName;
  const email = faker.internet.email({firstName: fName, lastName: lName, provider:"example.op"});
  const avatar = faker.image.avatar();
  return {
      name,
      email,
      password: await hash(email),
      avatar,
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      ...overrides,
  };
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const oneAdmin = await genT({
      name: "Deviza Loper",
      email: "deviza@me.op",
      password: await hash("dev"),
      role: "admin",
  });
    
    const twoAdmin = await genT({
      name: "Devvy Opper",
      email: "devvy@me.op",
      password: await hash("dev"),
      role: "admin",
  });
  const gennedUsers = [
    oneAdmin,
    twoAdmin,
      ...(await newArray(10)(genT)),
  ];


  await queryInterface.bulkInsert(
    "Users",
    gennedUsers.map((u, i) => ({
        ...u,
    })),
    {}
);
 
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  }
};
