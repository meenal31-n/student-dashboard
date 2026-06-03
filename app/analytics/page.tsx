import {
  BookOpen,
  Award,
  Clock,
  Flame,
} from "lucide-react";

export default function Analytics() {
  return (
    <main className=" bg-zinc-950 text-white p-8">


      <header className="mb-8">
        <h1 className="text-4xl font-bold">
          Analytics
        </h1>

        <p className="mt-2 text-zinc-400">
          Track your learning journey and performance.
        </p>
      </header>

   
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        <article className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
          <Clock size={28} className="mb-4" />
          <p className="text-zinc-400">
            Hours Studied
          </p>

          <h2 className="text-4xl font-bold mt-2">
            126
          </h2>
        </article>

        <article className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
          <BookOpen size={28} className="mb-4" />
          <p className="text-zinc-400">
            Courses Completed
          </p>

          <h2 className="text-4xl font-bold mt-2">
            12
          </h2>
        </article>

        <article className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
          <Award size={28} className="mb-4" />
          <p className="text-zinc-400">
            Certificates Earned
          </p>

          <h2 className="text-4xl font-bold mt-2">
            8
          </h2>
        </article>

        <article className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
          <Flame size={28} className="mb-4" />
          <p className="text-zinc-400">
            Current Streak
          </p>

          <h2 className="text-4xl font-bold mt-2">
            15 Days
          </h2>
        </article>

      </section>

   
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <article className="xl:col-span-2 bg-zinc-900 rounded-3xl p-6 border border-zinc-800">

          <h2 className="text-2xl font-bold mb-8">
            Weekly Learning Activity
          </h2>

          <ul className="flex items-end gap-4 h-74">
            <li className="flex-1 h-[35%] rounded-t-2xl bg-green-500" />
            <li className="flex-1 h-[60%] rounded-t-2xl bg-green-500" />
            <li className="flex-1 h-[45%] rounded-t-2xl bg-green-500" />
            <li className="flex-1 h-[80%] rounded-t-2xl bg-green-500" />
            <li className="flex-1 h-[65%] rounded-t-2xl bg-green-500" />
            <li className="flex-1 h-[100%] rounded-t-2xl bg-green-500" />
            <li className="flex-1 h-[70%] rounded-t-2xl bg-green-500" />
          </ul>

          <ul className="flex justify-between mt-4 text-sm text-zinc-500 ">
            <li className="flex align-center">Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            <li>Sun</li>
          </ul>

        </article>

      
        <article className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">

          <h2 className="text-2xl font-bold mb-8">
            Skills Progress
          </h2>

          <section className="space-y-8">

            <article>
              <header className="flex justify-between mb-3">
                <span>React</span>
                <span>75%</span>
              </header>

              <progress
                value={75}
                max={100}
                className="w-full h-3"
              />
            </article>

            <article>
              <header className="flex justify-between mb-3">
                <span>Next.js</span>
                <span>43%</span>
              </header>

              <progress
                value={43}
                max={100}
                className="w-full h-3"
              />
            </article>

            <article>
              <header className="flex justify-between mb-3">
                <span>TypeScript</span>
                <span>67%</span>
              </header>

              <progress
                value={67}
                max={100}
                className="w-full h-3"
              />
            </article>

          </section>

        </article>

      </section>

    </main>
  );
}