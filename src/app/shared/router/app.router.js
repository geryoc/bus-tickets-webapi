const { Router } = require("express");
const demoRouter = require("../../resources/demo/demo.router.js");
const locationRouter = require("../../resources/location/location.router.js");
const tripRouter = require("../../resources/trip/trip.router.js");

const appRouter = Router();

appRouter.use("/demos", demoRouter);
appRouter.use("/locations", locationRouter);
appRouter.use("/trips", tripRouter);

module.exports = appRouter;
