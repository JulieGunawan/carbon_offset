'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      invoice_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull:false
      },
      purchased_tree: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      fk_user_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model:'Users', key:'user_id'},
      },
      fk_vehicle_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model:'Inventories', key:'inventory_id'},
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
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Invoices');
  }
};
