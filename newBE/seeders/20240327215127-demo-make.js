'use strict';
const { faker } = require("@faker-js/faker");
const newArray = (length) => (map) =>
    Promise.all(Array.from({ length }).map(() => map()));

const genT = async (overrides) => {
  const make = faker.vehicle.manufacturer();
  return {
      make,
      logo:
          "https://www.freepik.com/free-vector/flat-design-car-service-logo_32283707.htm#query=super%20car%20logo&position=0&from_view=keyword&track=ais&uuid=c2c6dec4-7869-4551-b911-a83c06f73a36",
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
