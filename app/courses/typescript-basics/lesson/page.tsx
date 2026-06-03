
import { supabase } from "@/supabase";
import LessonVideo from "./LessonVideo";

export default async function LessonPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;

  const lessonData = {
    introduction: {
      id:1,
      title: "Introduction to TypeScript",
      video: "typescript_intro.mp4",
    },
    types: {
      id:2,
      title: "Basic Types",
      video: "typescript_basics.mp4",
    },
    functions: {
      id:3,
      title: "Functions",
      video: "typescript_functions.mp4",
    },
    interfaces: {
      id:4,
      title: "Interfaces and Type Aliases",
      video: "typescript_interfaces.mp4",
    },
    classes: {
      id:5,
      title: "Classes & Objects",
      video: "typescript_classes.mp4",
    },
    generics: {
      id:6,
      title: "Generics",
      video: "typescript_generics.mp4",
    },
  };

  const lesson =
    lessonData[topic as keyof typeof lessonData];

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const videoUrl = supabase.storage
    .from("courses")
    .getPublicUrl(lesson.video).data.publicUrl;


  return (
    <main className="min-h-screen bg-zinc-950 p-8">
      <h1 className="text-3xl font-bold mb-6">
        {lesson.title}
      </h1>

      {/* <video
        controls
        className="w-full rounded-2xl"
        onEnded={markCompleted}
      >
        <source
          src={videoUrl}
          type="video/mp4"
        />
      </video> */}
      <LessonVideo
              videoUrl={videoUrl}
              lessonId={lesson.id}
      />
    </main>
  );
}