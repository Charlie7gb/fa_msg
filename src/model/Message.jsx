import mongoose from 'mongoose'


const { Schema } = mongoose;
//----
const messageSchema = new Schema({
    NumID: { 
        type: Number
    },  
    Name: {
        type: String
    },
    Message: {
        type: String
    }
})

mongoose.models = {}
export default mongoose.models.Message || mongoose.model('messages', messageSchema); 