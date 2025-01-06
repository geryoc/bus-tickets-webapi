const { DefaultPagination } = require("../../shared/const/pagination.const");
const { sequelize } = require("../../shared/models");
const Trip = require("../../shared/models/trip.model")(sequelize);
const Location = require("../../shared/models/location.model")(sequelize);
const { Op } = require("sequelize");

const tripController = {
  getById: (req, res, next) => {
    const tripId = req.params.id;
    Trip.findByPk(tripId, {
      include: [
        {
          model: Location,
          as: "originLocation",
        },
        {
          model: Location,
          as: "destinationLocation",
        },
      ],
    })
      .then((trip) => res.json(trip))
      .catch(next);
  },
  getAll: (req, res, next) => {
    Trip.findAll({
      include: [
        {
          model: Location,
          as: "originLocation",
        },
        {
          model: Location,
          as: "destinationLocation",
        },
      ],
    })
      .then((trips) => res.json(trips))
      .catch(next);
  },
  search: (req, res, next) => {
    const searchTerm = req.query.busNumber;
    const pageNumber =
      parseInt(req.query.pageNumber, 10) || DefaultPagination.pageNumber;
    const pageSize =
      parseInt(req.query.pageSize, 10) || DefaultPagination.pageSize;
    const limit = Math.max(pageSize, 1);
    const offset = (Math.max(pageNumber, 1) - 1) * limit;

    const queryOptions = {
      limit,
      offset,
      where: searchTerm
        ? { busNumber: { [Op.iLike]: `%${searchTerm}%` } }
        : undefined,
      include: [
        {
          model: Location,
          as: "originLocation",
        },
        {
          model: Location,
          as: "destinationLocation",
        },
      ],
    };

    Trip.findAndCountAll(queryOptions)
      .then(({ rows: trips, count: totalItems }) => {
        res.json({
          items: trips,
          pagination: {
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: pageNumber,
            pageSize: limit,
          },
        });
      })
      .catch(next);
  },
  post: (req, res, next) => {
    Trip.create(req.body)
      .then((trip) => res.status(201).json(trip))
      .catch(next);
  },
  put: (req, res, next) => {
    const tripId = req.params.id;
    Trip.update(req.body, { where: { id: tripId }, returning: true })
      .then(([, [updatedTrip]]) => res.json(updatedTrip))
      .catch(next);
  },
  delete: (req, res, next) => {
    const tripId = req.params.id;
    Trip.destroy({ where: { id: tripId } })
      .then(() => res.status(204).end())
      .catch(next);
  },
};

module.exports = tripController;
