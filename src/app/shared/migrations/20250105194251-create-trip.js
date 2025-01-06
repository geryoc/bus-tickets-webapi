"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Trip", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      originLocationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      destinationLocationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      busNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      maxSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      basePrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      travelDurationInMinutes: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Trip");
  },
};
