import { createSignal } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="bg-slate-200 text-slate-700 p-8 rounded-md">
      <h2 class="text-2xl">Home</h2>
      <p class="mt-4">This is the home page.</p>

      <div class="flex items-center space-x-2 mt-4">
        <button
          type="button"
          class="border rounded-lg px-2 border-slate-900"
          onClick={() => setCount(count() - 1)}
        >
          -
        </button>

        <output class="p-10px">Count: {count()}</output>

        <button
          type="button"
          class="border rounded-lg px-2 border-slate-900"
          onClick={() => setCount(count() + 1)}
        >
          +
        </button>
      </div>
    </section>
  );
}
