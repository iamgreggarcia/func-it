// src/utils/prompts.ts
import endent from 'endent';
import { OPENAPI_YAML, OPENAPI_JSON, FUNCTIONS, OPENAI_FUNCTIONS_DEF, NATURAL_LANGUAGE_INPUT } from './const';

enum InputLanguage {
    Natural = 'Natural Language',
    YAML = 'yaml',
    JSON = 'json',
}

type OutputLanguage = string;

const LANGUAGE_CONFIG = {
    [InputLanguage.Natural]: {
        type: 'Natural Language',
        example: NATURAL_LANGUAGE_INPUT,
    },
    [InputLanguage.YAML]: {
        type: 'openapi.yaml OpenAPI spec',
        example: OPENAPI_YAML,
    },
    [InputLanguage.JSON]: {
        type: 'openapi.json OpenAPI spec',
        example: OPENAPI_JSON,
    },
}

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
    const config = LANGUAGE_CONFIG[inputLanguage];
    if (!config) throw new Error(`Unsupported input language: ${inputLanguage}`);
    
    return endent`
        You are an expert software engineer with deep knowledge of all programming languages.
        You are tasked with translating a ${config.type} into a functions array written in ${outputLanguage} (Do not include backticks \`\`\`)
        for the OpenAI Chat Completions API functions parameter. Carefully read the following documentation and examples. 
        Then respond to the PRODUCTION request.
        DO NOT WRITE NATUARAL LANGUAGE UNLESS IT IS A CODE COMMENT. CODE ONLY.(Do not include backticks \`\`\`)

        ${OPENAI_FUNCTIONS_DEF}

        Here is an EXAMPLE translating a ${config.type} to a Python array called "functions":
        ---
        ${config.type}:
        ${config.example}

        Python functions array code:
        ${FUNCTIONS}
        ---

        Below is the PRODUCTION request: translate the ${config.type} into a functions array in ${outputLanguage} (Do not include backticks \`\`\`).

        ${config.type}:
        ${inputCode}

        ${inputLanguage} functions array code (no \`\`\`). DO NOT WRITE NATUARAL LANGUAGE UNLESS IT IS A CODE COMMENT. CODE ONLY. (Do not include backticks \`\`\`)
        `;
};
