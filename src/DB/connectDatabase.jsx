import mongoose from "mongoose";

const connectMongo = async () => {
  try {
  //mongodb+srv://elie123ayoub:NIPTgZUETenvGh5N@cluster0.exlopje.mongodb.net/FAMessage?retryWrites=true&w=majority
  //mongodb://127.0.0.1:27017/FAMessage
    const { connection } = await mongoose.connect(process.env.MONGO_URL)
    if (connection.readyState == 1) {
      console.log("Database Connected")
      return connection;
    }
  } catch (errors) {
    console.log(errors)
  }

}
export default connectMongo;
