import { connect } from "@/app/lib/connectDB";
import { feedback } from "../../route";
import { ObjectId } from "mongodb";
const feedbackCollection = connect('feedbacks');
export async function GET(request, { params }) {
    const { id } = await params;
    console.log(id)
    if (id.length !== 24) {
        return Response.json({
            status: 400,
            message: "Send current id"
        })
    }
    const result = await feedbackCollection.findOne({ _id: new ObjectId(id) })
    return Response.json(result)
}
export async function DELETE(request, { params }) {
    const { id } = await params;
    if (id.length !== 24) {
        return Response.json({
            status: 400,
            message: "Send current id"
        })
    }
    const result = await feedbackCollection.deleteOne({ _id: new ObjectId(id) })
    return Response.json(result)
}
export async function PATCH(request, { params }) {
    const { id } = await params;
    const { message } = await request.json();
    // check to see if message is valid
    if (!message || typeof message !== "string") {
        return Response.json({
            status: 400,
            message: "Please send a message"
        })
    }
    if (id.length !== 24) {
        return Response.json({
            status: 400,
            message: "Send current id"
        })
    }
    const query = { _id: new ObjectId(id) }
    const result = await feedbackCollection.updateOne(query, {
        $set: {
            status: "updated",
            message: message,
            updatedAt: new Date().toISOString()
        }
    })
    return Response.json(result)
}