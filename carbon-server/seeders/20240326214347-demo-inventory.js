'use strict';
const { faker } = require("@faker-js/faker");
const newArray = (length) => (map) =>
    Promise.all(Array.from({ length }).map(() => map()));

const genT = async (overrides) => {
  const make = faker.vehicle.manufacturer();
  const model= faker.vehicle.model();
  const trim = faker.vehicle.type();
  const fuelType = faker.vehicle.fuel();
  return {
      make,
      model,
      trim,
      year: 2023,
      fuelType,
      mileage: 155800,
      image:
          "https://unsplash.com/photos/running-black-porsche-sedan-3ZUsNJhi_Ik",
      treeRatio: 0.05,
      treePlanted: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...overrides,
  };
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const oneVehicle = await genT({
      make: "Honda",
      model: "Civic",
      trim:"Sedan",
      mileage: 10000,
      year: "2020",
      fuelType: "petrol",
      image:
          "https://unsplash.com/photos/yellow-porsche-911-on-road-during-daytime-DwxlhTvC16Q",
      treeRatio: 0.1,
      treePlanted: 50,
      createdAt: new Date(),
      updatedAt: new Date()
  });

  const twoVehicle = await genT({
    make: "Ford",
    model: "Escape",
    trim:"SUV",
    mileage: 2000,
    year: "2024",
    fuelType: "petrol",
    image:
        "https://unsplash.com/photos/black-ford-5-door-hatchback-parking-near-road-KCwixy8UxVY",
    treeRatio: 0.12,
    treePlanted: 350,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const gennedVehicles = [
    oneVehicle,
    twoVehicle,
    ...(await newArray(10)(genT)),
  ];

  await queryInterface.bulkInsert(
    "inventory",
    gennedVehicles.map((u, i) => ({
        ...u,
    })),
    {}
  );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("inventory", null, {});
  }
};
