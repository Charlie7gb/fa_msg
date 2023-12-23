import connectMongo from '../../../DB/connectDatabase'
import { NextResponse } from 'next/server'
import Message from '../../../model/Message';

  

export async function POST(request, res) {
  try {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }));
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
    try {  
     /* const generatedID = Math.floor(Math.random()*(6 - 1)) + 1;
      var query = { NumID: generatedID };
      const ListMessage = await Message.findOne(query);
      //console.log(ListMessage)*/
      const client = await connectMongo;
     
 
      return NextResponse.json({ msgO :"----" }, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error: "Error in the Connection"}, { status: 500 })
    }
  }
  catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}



/*
  Delte
  const posts = await Post.findOneAndDelete({_id: req.query.id})

  Update
  const post = await Post.findOne({_id: req.query.id})
        post.title = req.body.title
        post.details= req.body.details
        post.user= req.body.user
        post.age= req.body.age
        await post.save()
*/