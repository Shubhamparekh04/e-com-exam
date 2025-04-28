const { Router } = require("express");

const clientRouter = Router();

const clientController = require("../controllers/clientController");


clientRouter.get("/", clientController.homePage);

module.exports = clientRouter;
