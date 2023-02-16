import mongoose from 'mongoose';

(async () => {
  const db = 
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DATABASE CONNECTED TO: ', db.connection.name);
})();