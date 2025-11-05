const router = require("express").Router();

const eventsController = require("../controllers/eventsController")

router.route("/events")
.post((req,res)=>eventsController.create(req,res));

router.route("/events").get((req, res)=> eventsController.getAll(req, res));

router.route("/events/:id").get((req, res)=>eventsController.get(req,res));


router.route("/events/:id").delete((req, res)=>eventsController.delete(req,res));

router.route("/events/:id").put((req,res)=> eventsController.update(req, res));


module.exports = router;