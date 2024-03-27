import dayjs from "dayjs";
import "dayjs/locale/tr";
import relativeTime from "dayjs/plugin/relativeTime";
import { ThumbsUp, ThumbsDown, MessageSquareText } from "lucide-react";
import type Post from "@/types/Post";

export default function Post({
  id,
  uid,
  //TODO: user name
  title,
  content,
  category,
  createdAt,
  updatedAt,
  likes,
  dislikes,
  comments,
}: Post) {
  dayjs.locale("tr");
  dayjs.extend(relativeTime);
  return (
    <div className="flex flex-col p-2 rounded-lg bg-background dark:bg-darkBackground gap-2">
      <p className="line-clamp-2 break-words">{title}</p>
      <p className="line-clamp-5 break-words">{content}</p>
      <div className="flex justify-between text-gray-500">
        <div className="flex gap-2 items-center">
          <ThumbsUp size={14} />
          <p>{likes}</p>
          <ThumbsDown size={14} />
          <p>{dislikes}</p>
          <MessageSquareText size={14} />
          <p>{comments}</p>
        </div>
        <p>{dayjs().to(createdAt)}</p>
      </div>
    </div>
  );
}
