import mongoose from 'mongoose';
import config from './config';

(async () => {
  const db = 
    await mongoose.connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DATABASE CONNECTED TO: ', db.connection.name);
})();