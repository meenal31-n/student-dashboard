

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
    title: "Introduction to React",
    video: "introduction.mp4",
  },
  components: {
    id:2,
    title: "Components & Props",
    video: "components.mp4",
  },
  state: {
    id:3,
    title: "State & Events",
    video: "state.mp4",
  },
  reducer: {
    id:4,
    title: "State Management with useReducer",
    video: "useReducer.mp4",
  },
  context: {
    id:5,
    title: "Context API",
    video: "contextAPI.mp4",
  },
  performance: {
    id:6,
    title: "Performance Optimization",
    video: "optimization.mp4",
  },
  };
 
  const lesson =
    lessonData[topic as keyof typeof lessonData];

  if (!lesson) {
    return <div>Lesson not found</div>;
  }
const videoUrl = supabase.storage.from("courses")
.getPublicUrl(lesson.video).data.publicUrl;

  return (
    <main className="min-h-screen bg-zinc-950 p-8">
      <h1 className="text-3xl font-bold mb-6">
        {lesson.title}
      </h1>

      {/* <video
        controls
        className="w-full rounded-2xl"
        // onEnded={markCompleted}
        
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