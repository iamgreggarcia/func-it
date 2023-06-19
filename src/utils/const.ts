import endent from "endent"

const OPENAPI_YAML = endent`
openapi: 3.0.0
info:
  title: Weather API
  version: 1.0.0
paths:
  /get_current_weather:
    get:
      summary: Get the current weather in a given location
      parameters:
        - name: location
          in: query
          description: The city and state, e.g. San Francisco, CA
          required: true
          schema:
            type: string
        - name: unit
          in: query
          description: Unit of temperature
          schema:
            type: string
            enum: [celsius, fahrenheit]
      responses:
        '200':
          description: Successful operation
`;

const OPENAPI_JSON = endent`
{
    "openapi": "3.0.0",
    "info": {
      "title": "Weather API",
      "version": "1.0.0"
    },
    "paths": {
      "/get_current_weather": {
        "get": {
          "summary": "Get the current weather in a given location",
          "parameters": [
            {
              "name": "location",
              "in": "query",
              "description": "The city and state, e.g. San Francisco, CA",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "unit",
              "in": "query",
              "description": "Unit of temperature",
              "schema": {
                "type": "string",
                "enum": ["celsius", "fahrenheit"]
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation"
            }
          }
        }
      }
    }
  }
`

const PYTHON_FUNCTIONS = endent`
functions = [
    {
        "name": "get_current_weather",
        "description": "Get the current weather in a given location",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "The city and state, e.g. San Francisco, CA",
                },
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
            },
            "required": ["location"],
        },
    }
]
`

const OPENAI_FUNCTIONS_DEF= endent`
Chat Completions API functions parameter:
---
## functions
**Type:** array
**Description:** A list of functions the model may generate JSON inputs for.
**Required:** No
---
## name
**Type:** string
**Description:** The name of the function to be called. The name must only contain alphanumeric characters or underscores and dashes. The maximum length of the function name is 64 characters.
**Required:** Yes
---
## description
**Type:** string
**Description:** The description of what the function does.
**Required:** No
---
## parameters
**Type:** object
**Description:** The parameters that the function accepts. The parameters should be described as a JSON Schema object. For examples, refer to the guide. For more documentation about the format, refer to the JSON Schema reference.
**Required:** No
`
const NATURAL_LANGUAGE_INPUT = endent`
Write a function \`get_current_weather\` with required \`location\` (city, state) and optional \`unit\` ("celsius" or "fahrenheit") to return current weather.
`

export { OPENAPI_YAML, OPENAPI_JSON, PYTHON_FUNCTIONS as FUNCTIONS, OPENAI_FUNCTIONS_DEF, NATURAL_LANGUAGE_INPUT };
