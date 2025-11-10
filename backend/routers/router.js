const router =  require("express").Router();

// Events router

const eventsRouter = require("./events");

router.use("/", eventsRouter);

// Users router

const usersRouter = require("./users");

router.use("/", usersRouter);

module.exports = router;