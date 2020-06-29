let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let taskSchema = new Schema({
   task: {
       type: String,
       required: true
   },
   duration: {
       type: Number,
       required: true
   },
    day: {
       type: String,
       required: true
    }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
