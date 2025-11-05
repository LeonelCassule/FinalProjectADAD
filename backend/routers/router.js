const router =  require("express").Router();

// Events router

const eventsRouter = require("./events");

router.use("/", eventsRouter);

// Users router

const userRouter = require("./users");
router.use("/",userRouter);

module.exports = router;