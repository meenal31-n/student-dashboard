import { Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createSupabaseServer } from "@/lib/supabaseServer";

export default async function Courses() {
  // React Progress
  const supabase = createSupabaseServer();
  const { data: reactData } = await supabase
    .from("user_progress")
    .select("lesson_id")
    .eq("course_id", 1)
    .eq("completed", true);

  const reactProgress = Math.round(
    (new Set(reactData?.map(item => item.lesson_id)).size / 6) * 100
  );

  // TypeScript Progress
  const { data: tsData } = await supabase
    .from("user_progress")
    .select("lesson_id")
    .eq("course_id", 2)
    .eq("completed", true);

  const typescriptProgress = Math.round(
    (new Set(tsData?.map(item => item.lesson_id)).size / 6) * 100
  );

  // Next.js Progress
  const { data: nextData } = await supabase
    .from("user_progress")
    .select("lesson_id")
    .eq("course_id", 3)
    .eq("completed", true);

  const nextProgress = Math.round(
    (new Set(nextData?.map(item => item.lesson_id)).size / 6) * 100
  );

  const courses = [
    {
      title: "React Fundamentals",
      progress: reactProgress,
      lessons: 6,
      image: "/react_fundamentals.jpg",
      link: "/courses/react-fundamentals",
    },
    {
      title: "Next.js Mastery",
      progress: nextProgress,
      lessons: 6,
      image: "/nextjs.webp",
      link: "/courses/nextJs-Mastery",
    },
    {
      title: "TypeScript Basics",
      progress: typescriptProgress,
      lessons: 6,
      image: "/typescript.jfif",
      link: "/courses/typescript-basics",
    },
  ];

  return (
    <main className="min-h-screen px-4 py-6 md:px-8">
      <section className="mb-9">
        <h1 className="text-3xl md:text-4xl font-bold">
          My Courses
        </h1>

        <p className="text-zinc-400 mt-2">
          Continue your learning journey!
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <article className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
          <p className="text-zinc-400 text-sm">
            Active Courses
          </p>
          <h2 className="text-3xl font-bold mt-2">
            {courses.length}
          </h2>
        </article>

        <article className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
          <p className="text-zinc-400 text-sm">
            Completed
          </p>
          <h2 className="text-3xl font-bold mt-2">
            {courses.filter(c => c.progress === 100).length}
          </h2>
        </article>

        <article className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
          <p className="text-zinc-400 text-sm">
            Learning Streak
          </p>
          <h2 className="text-2xl font-bold mt-2 flex items-center">
            <Flame size={22} />
            <span>15 Days</span>
          </h2>
        </article>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <article
            key={course.title}
            className="
              bg-zinc-900
              rounded-3xl
              overflow-hidden
              border
              border-zinc-800
              min-h-[450px]
            "
          >
            <section className="relative h-52 w-full">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </section>

            <section className="p-6">
              <h2 className="text-2xl font-bold">
                {course.title}
              </h2>

              <p className="text-zinc-400 mt-2">
                {course.lessons} Lessons
              </p>

              <section className="mt-6">
                <section className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-400">
                    Progress
                  </span>

                  <span className="font-medium">
                    {course.progress}%
                  </span>
                </section>

                <section className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </section>
              </section>

              <Link
                href={course.link}
                className="
                  mt-8
                  block
                  w-full
                  py-3
                  rounded-xl
                  bg-white
                  text-black
                  font-bold
                  text-center
                "
              >
                Continue Learning
              </Link>
            </section>
          </article>
        ))}
      </section>
    </main>
  );
}