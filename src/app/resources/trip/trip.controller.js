const { DefaultPagination } = require("../../shared/const/pagination.const");
const { Op } = require("sequelize");
const { createPaginationResponse } = require("../../shared/helpers/api-response.helper");
const models = require("../../shared/models");

const tripController = {
  getById: (req, res, next) => {
    const tripId = req.params.id;
    models.Trip.findByPk(tripId, {
      include: ["originLocation", "destinationLocation"],
    })
      .then((trip) => res.json(trip))
      .catch(next);
  },
  getAll: (req, res, next) => {
    models.Trip.findAll({
      include: ["originLocation", "destinationLocation"],
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
      include: ["originLocation", "destinationLocation"],
    };

    models.Trip.findAndCountAll(queryOptions)
      .then(({ rows: trips, count: totalItems }) => {
        res.json({
          items: trips,
          pagination: createPaginationResponse(pageNumber, limit, totalItems),
        });
      })
      .catch(next);
  },
  post: (req, res, next) => {
    models.Trip.create(req.body)
      .then((trip) => res.status(201).json(trip))
      .catch(next);
  },
  put: (req, res, next) => {
    const tripId = req.params.id;
    models.Trip.update(req.body, { where: { id: tripId }, returning: true })
      .then(([, [updatedTrip]]) => res.json(updatedTrip))
      .catch(next);
  },
  delete: (req, res, next) => {
    const tripId = req.params.id;
    models.Trip.destroy({ where: { id: tripId } })
      .then(() => res.status(204).end())
      .catch(next);
  },
};

module.exports = tripController;
