const mongoose = require("mongoose");

const connect = (MONGO_URI) => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then((mongo) => console.log(`MongoDB Connected: ${mongo.connection.host}`))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

module.exports = {
  connect,
};
