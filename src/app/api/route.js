export const feedback = [
    {
        id: 1,
        message: 'water behef onk vlo'
    },
    {
        id: 2,
        message: 'khabar ta onk vlo '
    }
]
export async function GET(request) {
    return Response.json({
        status: 200,
        message: 'Yeooo api created!'
    })
}