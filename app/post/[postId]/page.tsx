import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import relativeTime from "dayjs/plugin/relativeTime";
import PageContainer from "@/components/PageContainer";
import { ThumbsUp, ThumbsDown, MessageSquareText } from "lucide-react";
import type Post from "@/types/Post";
import Textarea from "@/components/utils/Textarea";
import Button from "@/components/utils/Button";
import Comment from "@/components/utils/Comment";

export default function PostPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  return (
    <PageContainer>
      <div className="flex gap-5 flex-col">
        <Post
          key="1"
          id="12"
          uid="1234"
          title="Post Title safe accurate suppose nearer street even control spoken soon second freedom receive bit apart pie chicken sentence silver drink missing exclaimed roll feature became dinner basis having older carried about aloud mean wrote vowel bet chamber wing directly game sugar week opinion pale raise conversation car heart neighborlaid week behavior cream cookies edge wheat free tonight center shall throughout room wait magic tower by headed rest done hot season nature sale"
          content="Post Content AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH feathers leather dress correctly fifty recall golden dog disappear audience exclaimed rich hill finger especially sing skin eager sit once we task later highest"
          category={{ id: "asdfsdf", name: "Category Name" }}
          createdAt={dayjs("2023-11-11")}
          updatedAt={dayjs("2023-12-1")}
          likes={5}
          dislikes={1}
          comments={3}
        />
        <form className="flex flex-col gap-2 bg-foreground dark:bg-darkForeground p-5 rounded-lg">
          <label htmlFor="comment">Yorumlar</label>
          <Textarea
            id="comment"
            name="comment"
            placeholder="Yorumunuzu buraya yazın..."
          />
          <div className="flex flex-row-reverse">
            <Button type="submit">Yorum Yap</Button>
          </div>
        </form>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <Comment
              key={index}
              id={`post-${index}`}
              uid={`uid-${index}`}
              content={`Post Content ${index}`}
              createdAt={dayjs("2023-11-11")}
              updatedAt={dayjs("2023-12-1")}
              likes={5}
              dislikes={1}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

// customized Post component for the page
function Post({
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
    <div className="flex flex-col p-5 rounded-lg bg-foreground dark:bg-darkForeground gap-2">
      <p className="break-words">{title}</p>
      <p className="break-words">{content}</p>
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
