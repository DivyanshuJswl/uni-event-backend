const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log('✅ Using existing database connection');
      return;
    }

    await mongoose.connect("mongodb+srv://DEV:ram2122@bajajdb.tmzis.mongodb.net/?retryWrites=true&w=majority&appName=BajajDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
