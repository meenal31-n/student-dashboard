export default function Loading() {
  return (
    <main className="min-h-screen p-6">
      <section className="animate-pulse">
        <div className="h-32 rounded-2xl bg-zinc-800 mb-6" />      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-64 rounded-2xl bg-zinc-800" />
          <div className="h-64 rounded-2xl bg-zinc-800" />
          <div className="h-64 rounded-2xl bg-zinc-800" />
        </div>

      </section>
    </main>
  );
}