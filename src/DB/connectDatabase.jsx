import mongoose from "mongoose";

const connectMongo = async () => {
  try {
  //MONGO_URL = 'mongodb+srv://elie123ayoub:NIPTgZUETenvGh5N@cluster0.exlopje.mongodb.net/'
    const { connection } = await mongoose.connect(process.env.MONGO_URL)
    if (connection.readyState == 1) {
      console.log("Database Connected")
      return connection;
    }
  } catch (errors) {
    return Promise.reject(errors)
  }

}
export default connectMongo;
