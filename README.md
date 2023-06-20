# Func-it

Func-it translates API specifications into a properly formatted `functions` parameter for the OpenAI Chat Completions API. 

## Quickstart

1. Clone the repository and navigate into the directory:
    ```
    git clone https://github.com/username/funcit.git
    cd funcit
    ```

2. Install the dependencies using `pnpm`:
    ```
    pnpm install
    ```

3. Copy the `.env.example` file to `.env.local` and add your OpenAI API key:
    ```
    cp .env.example .env.local
    nano .env.local
    ```
    Replace `YOUR_OPENAI_API_KEY` in `OPENAI_API_KEY=YOUR_OPENAI_API_KEY` with your actual OpenAI API key.

5. Start the development server:
    ```
    pnpm dev
    ```

6. Go to [http://localhost:3000](http://localhost:3000) to start using Func-it.

## More Information

For additional details about the OpenAI Chat Completions API and function calling, please see the [OpenAI documentation](https://platform.openai.com/docs/guides/gpt/function-calling).

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more information.