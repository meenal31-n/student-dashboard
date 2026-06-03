

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
      title: "Introduction to Next.js",
      video: "nextjs_intro.mp4",
    },
    pages: {
      id:2,
      title: "Pages & Routing",
      video: "nextjs_pages.mp4",
    },
    layouts: {
      id:3,
      title: "Layouts and Templates",
      video: "nextjs_layouts.mp4",
    },
    dynamic: {
      id:4,
      title: "Dynamic Routing",
      video: "nextjs_routing.mp4",
    },
    api: {
      id:5,
      title: "API Routes",
      video: "nextjs_API.mp4",
    },
    deployment: {
      id:6,
      title: "Deployment",
      video: "nextjs_deployment.mp4",
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