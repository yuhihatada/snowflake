import axios from "axios";
import { NextRequest } from "next/server";

const pythonApiUrl = "http://llama_cpp:3001";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const response = await axios.post(
    `${pythonApiUrl}/chat`,
    {
      text: body.message,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "Access-Control-Allow-Headers":
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-App-Id, X-App-Version, Authorization",
      },
    }
  );
  return new Response(JSON.stringify({ text: response.data.result }));
}
