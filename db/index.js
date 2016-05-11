var mongoose = require('mongoose'),
  conn;

require('./models');

module.exports = function(){
  if (!conn){
    conn = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/stackathon', function(err){
      if (err)
        console.log(err);
    });
  }
  return conn;
};
