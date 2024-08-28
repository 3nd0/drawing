import { generate, count } from "random-words";

export default function Home() {
  const word = generate()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {word}
    </main>
  );
}
