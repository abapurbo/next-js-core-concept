import { feedback } from "../route";

export async function GET(request) {
    const feedbackCollection = connect('feedbacks');
    const result = await feedbackCollection.find().toArray();
    return Response.json(result)
}

export async function POST(request) {
    const { message } = await request.json()
    if (!message || typeof message !== "string") {
        return Response.json({
            status: 400,
            message: "Please send a message"
        })
    }
    const newMessage = { message, id: feedback.length + 1 };
    feedback.push(newMessage)

    return Response.json({
        status: 200,
        data
    })
}