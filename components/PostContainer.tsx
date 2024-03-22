import { Category } from "@/types/Category";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import relativeTime from "dayjs/plugin/relativeTime";

export default function PostContainer({
  activeCategory,
}: {
  activeCategory: Category;
}) {
  dayjs.locale("tr");
  dayjs.extend(relativeTime);

  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <Post
          key={index}
          id={`post-${index}`}
          uid={`uid-${index}`}
          title={`Post Title ${index}`}
          content={`Post Content ${index}`}
          category={activeCategory}
          createdAt={dayjs("2023-11-11")}
          updatedAt={dayjs("2023-12-1")}
          likes={5}
          dislikes={1}
          comments={3}
        />
      ))}
    </div>
  );
}

type PostContainerProps = {
  id: string;
  uid: string;
  title: string;
  content: string;
  category: Category;
  createdAt: dayjs.Dayjs;
  updatedAt: dayjs.Dayjs;
  likes: number;
  dislikes: number;
  comments: number;
};

export function Post({
  id,
  uid,
  title,
  content,
  category,
  createdAt,
  updatedAt,
  likes,
  dislikes,
  comments,
}: PostContainerProps) {
  return (
    <div className="flex flex-col p-5 rounded-lg bg-background dark:bg-darkBackground gap-2">
      <p>{title}</p>
      <p>{content}</p>
      <div className="flex justify-between text-gray-500">
        <div className="flex gap-2">
          <p>{likes}</p>
          <p>{dislikes}</p>
          <p>{comments}</p>
        </div>
        <div className="flex gap-2">
          <p>{dayjs().to(createdAt)}</p>
          <p>{dayjs().to(updatedAt)}</p>
        </div>
      </div>
    </div>
  );
}
