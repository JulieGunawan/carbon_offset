'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "Models", "treeRatio", {
        type: Sequelize.FLOAT,
        allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Models", "treeRatio");
  }
};
