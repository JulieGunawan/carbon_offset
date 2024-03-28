'use strict';
const { faker } = require("@faker-js/faker");
const newArray = (length) => (map) =>
    Promise.all(Array.from({ length }).map(() => map()));

const genT = async (overrides) => {
  const model = faker.vehicle.model();
  const treeRatio=0.015;
  return {
      model,
      makeId: 1,
      treeRatio,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...overrides,
  };
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const oneMake = await genT({
      model: "Accord",
      makeId:1,
      treeRatio: 0.001,
      createdAt: new Date(),
      updatedAt: new Date()
  });

  const twoMake = await genT({
    model: "Escape",
    treeRatio:0.005,
    makeId:2,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const gennedModels = [
    oneMake,
    twoMake,
    ...(await newArray(10)(genT)),
  ];

  await queryInterface.bulkInsert(
    "Models",
    gennedModels.map((u, i) => ({
        ...u,
    })),
    {}
  );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Models", null, {});
  }
};
