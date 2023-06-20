import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { OpenAIModel } from '@/types/openai';


// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config); 
const model = OpenAIModel.Gpt3_5_Turbo_16k

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
const systemPrompt = { role: 'system', content: "You're a helpful assistant. End every response with: 'And that's the way the cookie crumbles!'"}

export async function POST(req: Request) {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();
    // Add system prompt to the beginning of the messages
    messages.unshift(systemPrompt);
    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.createChatCompletion({
        model: model,
        stream: true,
        messages,
    });
    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);
}