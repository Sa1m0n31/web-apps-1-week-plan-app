let Task = require("./models/TaskModel");

let router = require("express").Router();

router.get("/", (req, res) => {
   res.sendfile("Hi!");
});

router.post("/add", (req, res) => {
   let task = req.body.task;
   let duration = req.body.duration;
   let day = req.body.day;
   let newTask = new Task({task, duration, day});
   newTask.save()
       .then(() => { console.log("Saved to database") });
   res.send(task + " " + duration);
});

router.get("/get-tasks", (req, res) => {
   Task.find()
       .then((task) => res.json(task));
});

router.delete("/delete-task", (req, res) => {
      Task.deleteOne({task: req.query.task, day: req.query.day})
          .then((task) => res.json(task));
});

module.exports = router;
