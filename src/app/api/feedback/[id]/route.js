import { feedback } from "../../route";

export async function GET(request, { params }) {
    const { id } = await params;
    const singlFeedBack = feedback.find(feed => feed.id == id);
    return Response.json(singlFeedBack || {})
}