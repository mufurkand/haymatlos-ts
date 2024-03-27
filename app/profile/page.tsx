"use client";

import CategoryContainer from "@/components/CategoryContainer";
import PageContainer from "@/components/PageContainer";
import type Category from "@/types/Category";
import { User, Pencil } from "lucide-react";
import { useState } from "react";
import Post from "@/components/utils/Post";
import Comment from "@/components/utils/Comment";
import dayjs from "dayjs";

export default function Profile() {
  const [activeCategory, setActiveCategory] = useState<Category>({
    id: "posts",
    name: "Gönderiler",
  });

  const categories: Category[] = [
    {
      id: "posts",
      name: "Gönderiler",
    },
    {
      id: "comments",
      name: "Yorumlar",
    },
  ];

  return (
    <PageContainer>
      <div>
        <div>
          <div className="bg-foreground dark:bg-darkForeground p-5 rounded-lg flex">
            <div className="flex items-end">
              <div className="text-white rounded-full p-5 bg-accentRed">
                <User size="96" />
              </div>
              <div className="text-white rounded-full p-2 bg-accentRed">
                <Pencil size="24" />
              </div>
            </div>
            <div className="flex justify-center flex-col p-5">
              <p className="text-xl">Kullanıcı Adı</p>
              <p className="text-lg text-gray-500">he/him</p>
            </div>
          </div>
        </div>
        <CategoryContainer
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {/* TODO: post and comment components' padding kinda ruin it here */}
        {activeCategory.id === "posts" ? (
          <div>
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
        ) : (
          <div>
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
        )}
      </div>
    </PageContainer>
  );
}
