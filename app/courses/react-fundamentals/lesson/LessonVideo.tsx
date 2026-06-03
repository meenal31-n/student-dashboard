"use client";

import { supabase } from "@/supabase";
import { useRouter } from "next/navigation";

export default function LessonVideo({
  videoUrl,
  lessonId,
}: {
  videoUrl: string;
  lessonId: number;
}) {

const router = useRouter();
const markCompleted = async () => {
  

  const { error } = await supabase
    .from("user_progress")
    .insert({
      course_id: 1,
      lesson_id:lessonId,
      completed: true,
      completed_at: new Date().toISOString(),
    });
    router.refresh();
   
  if (error) {
  console.log("Supabase Error:", JSON.stringify(error, null, 2));
  alert(error.message);
}
};

  return (
    <video
      controls
      className="w-full rounded-2xl"
      onEnded={markCompleted}
    >
      <source
        src={videoUrl}
        type="video/mp4"
      />
    </video>
  );
}