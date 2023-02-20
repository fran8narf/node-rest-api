import mongoose from 'mongoose';
import config from './config';

(async () => {
  try {
    const db = 
      await mongoose.connect(config.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('DATABASE CONNECTED TO: ', db.connection.name);
  } catch(err) {
    console.log('ERROR CONNECTION TO THE DB <<<---------------------<<');
    console.log(err);
  }
})();