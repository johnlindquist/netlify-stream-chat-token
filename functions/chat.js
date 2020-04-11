let StreamChat = require("stream-chat").StreamChat
let client = new StreamChat("", process.env.STREAM_KEY)

exports.handler = async (event) => {

    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    let params = JSON.parse(event.body)

    let token = client.createToken(params.id)
    return {
        statusCode: 200,
        body: JSON.stringify({
            token
        })
    }
}