'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('inventory', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      make: {
        allowNull: false,
        type: Sequelize.STRING
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING
      },
      trim: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fuelType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      mileage: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      treeRatio: {
        type: Sequelize.INTEGER
      },
      treePlanted: {
        type: Sequelize.INTEGER
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING(500)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW()
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW()
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Vehicles');
  }
};
