/**
 * OpenAIModel represents the specific versions of OpenAI's GPT models.
 *
 * 'gpt-4' - More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat.
 * 'gpt-4-0613' - Snapshot of gpt-4 from June 13th 2023 with function calling data.
 * 'gpt-4-32k' - Same capabilities as the base gpt-4 mode but with 4x the context length.
 * 'gpt-4-32k-0613' - Snapshot of gpt-4-32 from June 13th 2023.
 * 'gpt-3.5-turbo' - Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003.
 * 'gpt-3.5-turbo-16k' - Same capabilities as the standard gpt-3.5-turbo model but with 4 times the context.
 * 'gpt-3.5-turbo-0613' - Snapshot of gpt-3.5-turbo from June 13th 2023 with function calling data.
 * 'gpt-3.5-turbo-16k-0613' - Snapshot of gpt-3.5-turbo-16k from June 13th 2023.
 *
 * Note: Snapshot models will not receive updates, and will be deprecated 3 months after a new version is released.
 */
export enum OpenAIModel {
    Gpt4 = 'gpt-4',
    Gpt4_0613 = 'gpt-4-0613',
    Gpt4_32k = 'gpt-4-32k',
    Gpt4_32k_0613 = 'gpt-4-32k-0613',
    Gpt3_5_Turbo = 'gpt-3.5-turbo',
    Gpt3_5_Turbo_16k = 'gpt-3.5-turbo-16k',
    Gpt3_5_Turbo_0613 = 'gpt-3.5-turbo-0613',
    Gpt3_5_Turbo_16k_0613 = 'gpt-3.5-turbo-16k-0613',
  }
  