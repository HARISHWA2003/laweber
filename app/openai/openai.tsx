import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  });
}
