// src/utils/prompts.ts
import endent from 'endent';
import { OPENAPI_YAML, OPENAPI_JSON, FUNCTIONS, OPENAI_FUNCTIONS_DEF, NATURAL_LANGUAGE_INPUT } from './const';

enum InputLanguage {
    Natural = 'Natural Language',
    YAML = 'yaml',
    JSON = 'json',
}

type OutputLanguage = string;

/**
* Create a system prompt for generating function specifications for OpenAI's Chat Completions API.
* @param inputLanguage - The language of the input code.
* @param outputLanguage - The language of the output code.
* @param inputCode - The code to be translated.
* @return - The constructed system prompt.
*/
export const createSystemPrompt = (
    inputLanguage: InputLanguage,
    outputLanguage: OutputLanguage,
    inputCode: string,
): string => {
    switch (inputLanguage) {
        case InputLanguage.Natural:
            // TODO: convert the user's natural language input into function parameter specs

            return endent`
            You are an expert software engineer with meticulous attention to detail. 
            You are tasked with translating natural language into a functions array written in "${outputLanguage}" (Do not include \`\`\`) for the OpenAI Chat Completions API functions parameter. 

            "${OPENAI_FUNCTIONS_DEF}"
            
            Example translating natural language to functions array in python:
            
            Natural lanugage:
            "${NATURAL_LANGUAGE_INPUT}"

            Python functions array code:
            "${FUNCTIONS}"

            Natural language:
            "${inputCode}"

            "${inputLanguage}" functions array code (no \`\`\`):
            `;
        case InputLanguage.YAML:
            // TODO: Convert the openapi.yaml spec into function parameter specs
            return endent`
            You are an expert software engineer with meticulous attention to detail. 
            You are tasked with translating an openapi.yaml OpenAPI spec into a functions array written in "${outputLanguage}" (Do not include \`\`\`) for the OpenAI Chat Completions API functions parameter. 
            
            "${OPENAI_FUNCTIONS_DEF}"
            
            Example translating openapi.yaml to functions array in python:
            
            Natural lanugage:
            "${NATURAL_LANGUAGE_INPUT}"

            Python functions array code:
            "${FUNCTIONS}"

            Natural language:
            "${inputCode}"

            "${inputLanguage}" functions array code (no \`\`\`):
            `

        case InputLanguage.JSON:
            // TODO: Convert the openapi.json spec into function parameter specs
            return endent`lorem ipsum`;
        default:
            throw new Error(`Unsupported input language: ${inputLanguage}`);
    }
};
