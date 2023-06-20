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
Chat Completions API functions parameter Documentation:
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

Example:
\`\`\`python
functions = [
  {
      "name": "function_1",
      "description": "This function does something",
      "parameters": {
          "param1": {
              "type": "string",
              "description": "The first parameter of function_1",
          },
          "param2": {
              "type": "integer",
              "description": "The second parameter of function_1",
          },
      },
  },
  {
      "name": "function_2",
      "description": "This function does something else",
      "parameters": {
          "param1": {
              "type": "boolean",
              "description": "The first parameter of function_2",
          },
      },
  },
  # Additional functions go here...
]
\`\`\`
`
const NATURAL_LANGUAGE_INPUT = endent`
Write a function \`get_current_weather\` with required \`location\` (city, state) and optional \`unit\` ("celsius" or "fahrenheit") to return current weather.
`
const LANGUAGES = [
  { value: 'Pascal', label: 'Pascal' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'Python', label: 'Python' },
  { value: 'TSX', label: 'TSX' },
  { value: 'JSX', label: 'JSX' },
  { value: 'Vue', label: 'Vue' },
  { value: 'Go', label: 'Go' },
  { value: 'C', label: 'C' },
  { value: 'C++', label: 'C++' },
  { value: 'Java', label: 'Java' },
  { value: 'C#', label: 'C#' },
  { value: 'Visual Basic .NET', label: 'Visual Basic .NET' },
  { value: 'SQL', label: 'SQL' },
  { value: 'Assembly Language', label: 'Assembly Language' },
  { value: 'PHP', label: 'PHP' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'Swift', label: 'Swift' },
  { value: 'SwiftUI', label: 'SwiftUI' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'R', label: 'R' },
  { value: 'Objective-C', label: 'Objective-C' },
  { value: 'Perl', label: 'Perl' },
  { value: 'SAS', label: 'SAS' },
  { value: 'Scala', label: 'Scala' },
  { value: 'Dart', label: 'Dart' },
  { value: 'Rust', label: 'Rust' },
  { value: 'Haskell', label: 'Haskell' },
  { value: 'Lua', label: 'Lua' },
  { value: 'Groovy', label: 'Groovy' },
  { value: 'Elixir', label: 'Elixir' },
  { value: 'Clojure', label: 'Clojure' },
  { value: 'Lisp', label: 'Lisp' },
  { value: 'Julia', label: 'Julia' },
  { value: 'Matlab', label: 'Matlab' },
  { value: 'Fortran', label: 'Fortran' },
  { value: 'COBOL', label: 'COBOL' },
  { value: 'Bash', label: 'Bash' },
  { value: 'Powershell', label: 'Powershell' },
  { value: 'PL/SQL', label: 'PL/SQL' },
  { value: 'CSS', label: 'CSS' },
  { value: 'Racket', label: 'Racket' },
  { value: 'HTML', label: 'HTML' },
  { value: 'NoSQL', label: 'NoSQL' },
  { value: 'Natural Language', label: 'Natural Language' },
  { value: 'CoffeeScript', label: 'CoffeeScript' },
];

export { OPENAPI_YAML, OPENAPI_JSON, PYTHON_FUNCTIONS as FUNCTIONS, OPENAI_FUNCTIONS_DEF, NATURAL_LANGUAGE_INPUT,LANGUAGES };
