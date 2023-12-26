import connectMongo from '../../../DB/connectDatabase'
import { NextResponse } from 'next/server'
import Message from '../../../model/Message';


export async function POST(request, res) {
  try {

    connectMongo();
    const requestData = await request.json()
    //console.log(request.json())
    const numID = await Message.countDocuments() + 1;
    //console.log(numID);
    const newMessage = new Message({ "NumID": numID, "Name": requestData.Name, "Message": requestData.Message });
    await newMessage.save();
    return NextResponse.json({ msg: "Api Res" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectMongo();
    const generatedID = Math.floor(Math.random() * (10 - 1)) + 1;
    var query = { NumID: generatedID };
    try {
      const ListMessage = await Message.findOne(query);
      return NextResponse.json({ msgO: ListMessage }, { status: 200 })
    }
    catch (error) {
      return NextResponse.json({ error: "model is error" }, { status: 500 })
    }
  }
  catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}