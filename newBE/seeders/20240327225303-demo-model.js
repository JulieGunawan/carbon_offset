'use strict';
const { faker } = require("@faker-js/faker");
const newArray = (length) => (map) =>
    Promise.all(Array.from({ length }).map(() => map()));

const genT = async (overrides) => {
  const model = faker.vehicle.model();
  return {
      model,
      make_id: ,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...overrides,
  };
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const oneMake = await genT({
      make: "Honda",
      logo:
          "https://images.app.goo.gl/DCbbUKsUTeYXNjNc9",
      createdAt: new Date(),
      updatedAt: new Date()
  });

  const twoMake = await genT({
    make: "Ford",
    logo:
        "https://images.app.goo.gl/L7St4idSvPQbpLYF7",
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const gennedMakes = [
    oneMake,
    twoMake,
    ...(await newArray(10)(genT)),
  ];

  await queryInterface.bulkInsert(
    "Makes",
    gennedMakes.map((u, i) => ({
        ...u,
    })),
    {}
  );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("inventory", null, {});
  }
};
