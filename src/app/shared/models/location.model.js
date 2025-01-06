"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Location extends Model {
    static associate(models) {
      Location.hasMany(models.Trip, {
        as: "originLocation",
        foreignKey: "originLocationId",
      });
      Location.hasMany(models.Trip, {
        as: "destinationLocation",
        foreignKey: "destinationLocationId",
      });
    }
  }
  Location.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Location",
      tableName: "Location",
      freezeTableName: true,
    }
  );

  return Location;
};
