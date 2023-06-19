// src/app/page.tsx
import { CodeBlock } from "@/components/code"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CodeBlock code="console.log('Hello, world!');" />
    </main>
  )
}