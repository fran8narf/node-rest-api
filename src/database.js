import mongoose from 'mongoose';

(async () => {
  const db = 
    await mongoose.connect('mongodb://localhost/collectionapi');
    console.log(db.connection.name);
})();