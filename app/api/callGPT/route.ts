import OpenAI from "openai";

const openai = new OpenAI({apiKey: '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'});

const callGPT = async (
    standOut: string,
    values: string,
    representation: string,
    about: string
  ) => {
    const gptResponse = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
          give me a small description for a law firm to put on the 'about us' page on their website using these as the inputs given by them for the following questions. (write it in one paragraph)
          How does your law firm standout? : ${standOut}
          What best represent you firm?: ${representation}
          What values are most important at your law firm?: ${values}
          Write a bit about yourself or the firm: ${about}
          `,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    return gptResponse.choices[0].message['content'];
  };


  // app/api/route.js 👈🏽

import { NextRequest, NextResponse } from "next/server";

// To handle a POST request to /api
export async function POST(request: NextRequest) {
  // Do whatever you want
  let data = await request.json();
  let gptResponse = await callGPT(data["standOut"], data["values"], data["representation"], data["about"]);
  console.log(data);
  console.log(gptResponse);

  return NextResponse.json({ message: gptResponse }, { status: 200 });
}