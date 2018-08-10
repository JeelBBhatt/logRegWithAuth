const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/UserData').then(
  () => console.log('Database Connected'),
  (err) => console.log('Error while connecting db',err)
)
module.exports = mongoose;
