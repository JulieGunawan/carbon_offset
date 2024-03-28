'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Inventories', {
      inventory_id: {
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
      fuel_type: {
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
      tree_to_km: {
        type: Sequelize.FLOAT,
        allowNull:false
      },
      planted_tree: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING(500)
      },
      fk_user_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model:'Users', key:'user_id'},
      },
      fk_model_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model:'Models', key:'model_id'},
      },
      fk_make_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model:'Makes', key:'make_id'},
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW()
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW()
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW()
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Inventories');
  }
};
