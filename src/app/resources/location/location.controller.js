const { DefaultPagination } = require("../../shared/const/pagination.const");
const { sequelize } = require("../../shared/models");
const Location = require("../../shared/models/location.model")(sequelize);
const { Op } = require("sequelize");

const locationController = {
  getById: (req, res, next) => {
    const locationId = req.params.id;
    Location.findByPk(locationId)
      .then((location) => res.json(location))
      .catch(next);
  },
  getAll: (req, res, next) => {
    Location.findAll()
      .then((locations) => res.json(locations))
      .catch(next);
  },
  search: (req, res, next) => {
    const searchTerm = req.query.name;
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
        ? { name: { [Op.iLike]: `%${searchTerm}%` } }
        : undefined,
    };

    Location.findAndCountAll(queryOptions)
      .then(({ rows: locations, count: totalItems }) => {
        res.json({
          items: locations,
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
    Location.create(req.body)
      .then((location) => res.status(201).json(location))
      .catch(next);
  },
  put: (req, res, next) => {
    const locationId = req.params.id;
    Location.update(req.body, { where: { id: locationId }, returning: true })
      .then(([, [updatedLocation]]) => res.json(updatedLocation))
      .catch(next);
  },
  delete: (req, res, next) => {
    const locationId = req.params.id;
    Location.destroy({ where: { id: locationId } })
      .then(() => res.status(204).end())
      .catch(next);
  },
};

module.exports = locationController;
