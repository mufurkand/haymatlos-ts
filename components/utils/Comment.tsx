import Comment from "@/types/Comment";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import relativeTime from "dayjs/plugin/relativeTime";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function Comment({
  id,
  uid,
  //TODO: user name
  content,
  createdAt,
  updatedAt,
  likes,
  dislikes,
}: Comment) {
  dayjs.locale("tr");
  dayjs.extend(relativeTime);
  return (
    <div className="flex flex-col p-2 rounded-lg bg-background dark:bg-darkBackground gap-2">
      <div className="flex text-gray-500">
        <p>username</p>
        <p>{dayjs().to(createdAt)}</p>
      </div>
      <div className="flex justify-between">
        <p className="break-words">{content}</p>
        <div className="flex gap-2 items-center text-gray-500">
          <ThumbsUp size={14} />
          <p>{likes}</p>
          <ThumbsDown size={14} />
          <p>{dislikes}</p>
        </div>
      </div>
    </div>
  );
}
