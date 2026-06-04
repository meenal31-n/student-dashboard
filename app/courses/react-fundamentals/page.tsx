import Image from "next/image";
import { BookOpen, Clock, Trophy } from "lucide-react";
import { supabase } from "@/supabase";
import Link from "next/link";
import { PlayCircle } from "lucide-react";


export default async function ReactFundamentals() {
  const {data :course , error} = await supabase.
  from("courses")
  .select("*")
  .eq("slug", "react-fundamentals")
  .single();
  if(error){
    return <div>Error:{error.message}</div>
  }
  if(!course){
    return<div>No Course Found</div>
  }
  

const totalLessons = 6;

const { data: completedLessons } =
  await supabase
    .from("user_progress")
    .select("lesson_id")
    .eq("course_id", course.id)
    .eq("completed", true);


const uniqueLessons = new Set(
  completedLessons?.map(
    (lesson) => lesson.lesson_id
  )
);

console.log("Unique Lessons:", [...uniqueLessons]);
console.log("Unique Count:", uniqueLessons.size);

const progress = Math.round(
  (uniqueLessons.size / totalLessons) * 100
);

console.log("Progress:", progress);

  return (
    <main className="min-h-screen bg-zinc-950 p-8">

      <article className="bg-zinc-900 rounded-3xl overflow-hidden border-zinc-800">

        <Image
          src="/react_fundamentals.jpg"
          alt="React Fundamentals"
          width={1200}
          height={400}
          className="w-full h-72"
        />

        <section className="p-8">

          <h1 className="text-4xl font-bold">
          {course.title}
          </h1>

          <p className="text-zinc-400 mt-3">
            Master modern React development with hooks,
            components, state management, and best practices.
          </p>

          <section className="mt-8">
            <header className="flex justify-between mb-3">
              <span>Course Progress</span>
              <span>{progress}%</span>
            </header>

            <progress
              value={progress}
              max={100}
              className="w-full h-3"
            />
          </section>
        </section>
      </article>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <article className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <BookOpen size={28} />
          <h2 className="text-3xl font-bold mt-4">
            6
          </h2>
          <p className="text-zinc-400">
            Lessons
          </p>
        </article>

        <article className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <Clock size={28} />
          <h2 className="text-3xl font-bold mt-4">
            4h
          </h2>
          <p className="text-zinc-400">
            Time Spent
          </p>
        </article>

        <article className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <Trophy size={28} />
          <h2 className="text-3xl font-bold mt-4">
            {progress}%
          </h2>
          <p className="text-zinc-400">
            Completed
          </p>
        </article>

      </section>

      <section className="mt-8">
        <article className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <h2 className="text-2xl font-bold">
            Continue Where You Left Off
          </h2>

          <p className="text-zinc-400 mt-3">
            Lesson 18: State Management with useReducer
          </p>

          <button
            className="
              mt-6
              px-6
              py-3
              rounded-xl
              bg-white
              text-black
              font-bold
              hover:bg-zinc-200
              transition
            "
          >
            Resume Lesson
          </button>
        </article>
      </section>

      <section className="mt-15">
        <h2 className="text-2xl font-bold mb-6">
          Course Content
        </h2>

        <section className="space-y-4">
           <Link href="/courses/react-fundamentals/lesson?topic=introduction">
            <article className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-white transition flex items-center justify-between cursor-pointer">
              <span>Introduction to React</span>
              <PlayCircle size={24} />
            </article>
          </Link>

           <Link href="/courses/react-fundamentals/lesson?topic=components">
            <article className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-white transition flex items-center justify-between cursor-pointer">
              <span>Components & Props</span>
              <PlayCircle size={24} />
            </article>
          </Link>

          <Link href="/courses/react-fundamentals/lesson?topic=state">
            <article className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-white transition flex items-center justify-between cursor-pointer">
              <span>State & Events</span>
              <PlayCircle size={24} />
            </article>
          </Link>

         <Link href="/courses/react-fundamentals/lesson?topic=reducer">
          <article className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-white transition flex items-center justify-between cursor-pointer">
            <span>State Management with useReducer</span>
            <PlayCircle size={24} />
          </article>
        </Link>

         <Link href="/courses/react-fundamentals/lesson?topic=context">
            <article className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-white transition flex items-center justify-between cursor-pointer">
              <span>Context API</span>
              <PlayCircle size={24} />
            </article>
          </Link>

          <Link href="/courses/react-fundamentals/lesson?topic=performance">
            <article className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-white transition flex items-center justify-between cursor-pointer">
              <span>Performance Optimization</span>
              <PlayCircle size={24} />
            </article>
          </Link>

        </section>

      </section>

    </main>
  );
} 