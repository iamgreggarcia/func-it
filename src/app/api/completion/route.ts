import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { OpenAIModel } from '@/types/openai';
import { createSystemPrompt } from '@/utils/prompt';
 
export const runtime = 'edge'
 

 
enum InputLanguage {
  Natural = 'Natural Language',
  YAML = 'yaml',
  JSON = 'json',
}

type OutputLanguage = string;


export async function POST(req: Request) {
  // Extract the `prompt`, `inputLanguage`, and `outputLanguage` from the body of the request
  const { prompt, inputLanguage, outputLanguage, apiKey } = await req.json()
  
  const inputLanguageType: InputLanguage = inputLanguage || InputLanguage.YAML
  const outputLanguageType: OutputLanguage = outputLanguage || 'python'
  const systemPrompt = createSystemPrompt(inputLanguageType, outputLanguageType, prompt)
  const apiConfig = new Configuration({
  apiKey: apiKey || process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(apiConfig)
const model = OpenAIModel.Gpt4_0613
  const response = await openai.createChatCompletion({
    model: model,
    stream: true,
    messages: [{ role: 'system', content: systemPrompt}],
    temperature: 0.1,
  })
 
  const stream = OpenAIStream(response)
 
  return new StreamingTextResponse(stream)
}
