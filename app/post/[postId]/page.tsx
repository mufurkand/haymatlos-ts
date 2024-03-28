"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import relativeTime from "dayjs/plugin/relativeTime";
import PageContainer from "@/components/PageContainer";
import { ThumbsUp, ThumbsDown, MessageSquareText } from "lucide-react";
import type Post from "@/types/Post";
import Textarea from "@/components/utils/Textarea";
import Button from "@/components/utils/Button";
import Comment from "@/components/utils/Comment";
import Input from "@/components/utils/Input";
import CategoryContainer from "@/components/CategoryContainer";
import type Category from "@/types/Category";

export default function PostPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const [isInEditMode, setIsInEditMode] = useState(false);

  if (isInEditMode) return <PostEdit setIsInEditMode={setIsInEditMode} />;

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
          setIsInEditMode={setIsInEditMode}
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
  setIsInEditMode,
}: Post & { setIsInEditMode: React.Dispatch<React.SetStateAction<boolean>> }) {
  dayjs.locale("tr");
  dayjs.extend(relativeTime);
  return (
    <div className="flex flex-col p-5 rounded-lg bg-foreground dark:bg-darkForeground gap-2">
      <p className="break-words">{title}</p>
      <p className="break-words">{content}</p>
      <div className="flex justify-end text-gray-500 underline">
        <button onClick={() => setIsInEditMode(true)}>Düzenle</button>
      </div>
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

function PostEdit({
  setIsInEditMode,
}: {
  setIsInEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [activeCategory, setActiveCategory] = useState<Category>({
    id: "culture",
    name: "Kültür/Sanat",
  });

  const categories: Category[] = [
    { id: "culture", name: "Kültür/Sanat" },
    { id: "science", name: "Bilim" },
    { id: "philosophy", name: "Felsefe" },
    { id: "politics", name: "Siyaset" },
  ];
  return (
    <PageContainer>
      <form className="rounded-lg bg-foreground dark:bg-darkForeground p-5 gap-5 flex flex-col items-center">
        <div className="flex flex-col lg:w-1/2 gap-2">
          <label>Başlık</label>
          <Input
            type="text"
            id="title"
            name="title"
            autocomplete="off"
            placeholder="Gönderi başlığını girin..."
          />
        </div>
        <div className="flex flex-col lg:w-1/2 gap-2">
          <label>İçerik</label>
          <Textarea
            id="content"
            name="content"
            placeholder="Gönderi içeriğini girin..."
          ></Textarea>
        </div>
        <div className="flex flex-col lg:w-1/2 gap-2">
          <label>Resim Linki</label>
          <Input
            type="text"
            id="image"
            name="image"
            autocomplete="off"
            placeholder="Resmin linkini girin..."
          />
        </div>
        {/* somehow categorycontainer's overflow-y-auto is not working here */}
        <div className="flex flex-col lg:w-1/2 gap-2">
          <label>Kategori</label>
          <CategoryContainer
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
        <div className="flex gap-5">
          <Button type="submit">Güncelle</Button>
          <Button type="button" onClick={() => setIsInEditMode(false)}>
            Vazgeç
          </Button>
        </div>
      </form>
    </PageContainer>
  );
}
