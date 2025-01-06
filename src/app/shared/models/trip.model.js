"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Trip extends Model {
    static associate(models) {
      Trip.belongsTo(models.Location, {
        as: "originLocation",
        foreignKey: "originLocationId",
      });
      Trip.belongsTo(models.Location, {
        as: "destinationLocation",
        foreignKey: "destinationLocationId",
      });
    }
  }

  Trip.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      originLocationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      destinationLocationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      busNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      basePrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      travelDurationInMinutes: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Trip",
      tableName: "Trip",
      timestamps: true,
    }
  );

  return Trip;
};
