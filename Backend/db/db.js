const mongoose = require('mongoose');

// Define the schema
function connectToDB() {
  mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
    console.log('Connected to MongoDB');
  })
  .catch((err) => { console.log(err); });
}

module.exports = connectToDB;