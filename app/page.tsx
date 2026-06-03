"use client";
import Image from "next/image";
import{
  BookOpen,
  ChartNoAxesColumn,
  Flame,
  House,
  Settings
} from "lucide-react";
import { motion } from "framer-motion";

export default function layout() {

  const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-zinc-950 relative overflow-hidden">
      <section className="absolute inset-0 -z-10">
      <section className="absolute top-0 left-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <section className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
       </section>
      <nav className="w-full md:w-64 border-b md:border-b-0 md:border-r border-zinc-800 p-6 ">
        <h2 className="text-xl font-bold mb-8">
          Dashboard
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1 gap-2">
          <li>
            <button className="w-full text-left md:text-left justify-center rounded-lg p-3 bg-zinc-800 hover:bg-zinc-700 flex items-center gap-3 md:justify-start">
              <House size={22}/> <span>Home</span>
            </button>
          </li>
          <li>
            <button className="w-full text-left md:text-left justify-center rounded-lg p-3 bg-zinc-800 hover:bg-zinc-700 flex items-center gap-3 md:justify-start">
              <BookOpen size={22}/> <span> <a href="/courses/">Courses</a></span> 
            </button>
          </li>
          <li>
            <button className="w-full text-left md:text-left justify-center rounded-lg p-3 bg-zinc-800 hover:bg-zinc-700 flex items-center gap-3 md:justify-start">
             <ChartNoAxesColumn size={22}/> <span><a href="/analytics/">Analytics</a></span>
            </button>
          </li>
          <li>
            <button className="w-full text-left md:text-left justify-center rounded-lg p-3 bg-zinc-800 hover:bg-zinc-700 flex items-center gap-3 md:justify-start">
             <Settings size={22}/><span><a href="/settings/">Settings</a></span>
            </button>
          </li>
        </ul>
      </nav>

      <section className="flex-1 p-6">
        <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
            >
          <article className="md:col-span-2 xl:col-span-3 rounded-2xl bg-zinc-900 p-5 md:p-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Welcome Back, Meenal
            </h1>

            <p className="mt-2 text-zinc-400 flex items-center">
              <Flame/> <span>15 Day Learning Streak</span>
            </p>
          </article>

           <motion.article
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-zinc-900
                  border
                  border-zinc-800
                  p-6
                  hover:border-emerald-500/30
                  hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]
                "
              >
            <h2 className="font-bold">
              React Fundamentals
            </h2>

            <p className="text-sm text-zinc-400 mt-2">
              Progress: 75%
            </p>
          </motion.article>

          <motion.article
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              bg-zinc-900
              border
              border-zinc-800
              p-6
              hover:border-emerald-500/30
              hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]
            "
>
            <h2 className="font-bold">
              Next.js Mastery
            </h2>

            <p className="text-sm text-zinc-400 mt-2">
              Progress: 40%
            </p>
          </motion.article>

          <motion.article
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              bg-zinc-900
              border
              border-zinc-800
              p-6
              hover:border-emerald-500/30
              hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]
            "
>
            <h2 className="font-bold">
              TypeScript Basics
            </h2>

            <p className="text-sm text-zinc-400 mt-2">
              Progress: 60%
            </p>
          </motion.article>

          <article className="md:col-span-2 xl:col-span-3 rounded-2xl bg-zinc-900 p-5 md:p-6 overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">
              Activity
            </h2>

            <section className="grid grid-cols-7 gap-2 min-w-max">
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-zinc-700"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>

              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-zinc-700"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-zinc-700"></span>

              <span className="h-4 w-4 rounded bg-zinc-700"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>

              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-zinc-700"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-green-500"></span>
              <span className="h-4 w-4 rounded bg-zinc-700"></span>
            </section>

          </article>

        </motion.section>

      </section>

    </main>
  );
}
