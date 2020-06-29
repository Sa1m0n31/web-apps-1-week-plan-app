let mongoose = require("mongoose");

let uri = "mongodb+srv://Sa1m0n:lolpol@mern-24cbs.mongodb.net/test?retryWrites=true&w=majority\n"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

let connection = mongoose.connection;

connection.once('open', () => {
   console.log("Nawiazano polaczenie z baza danych");
});
