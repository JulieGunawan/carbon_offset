'use strict';
const { faker } = require("@faker-js/faker");
const newArray = (length) => (map) =>
    Promise.all(Array.from({ length }).map(() => map()));

const genT = async (overrides) => {
  const amount = parseInt(faker.finance.amount({ min:1, max:10000, dec:0}));
  const treePurchased=amount;
  return {
      amount,
      treePurchased,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...overrides,
  };
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const oneOrder = await genT({
      amount: "1000",
      treePurchased: "1000",
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const twoOrder = await genT({
      amount: "2000",
      treePurchased: "2000",
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const gennedOrders = [
      oneOrder,
      twoOrder,
      ...(await newArray(10)(genT)),
    ];

    await queryInterface.bulkInsert(
      "Invoices",
      gennedOrders.map((u, i) => ({
          ...u,
      })),
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Invoices", null, {});
  }
};
