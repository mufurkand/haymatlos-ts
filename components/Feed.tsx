"use client";

import { useState } from "react";
import CategoryContainer from "@/components/CategoryContainer";
import type Category from "@/types/Category";
import PostContainer from "@/components/PostContainer";

export default function Feed() {
  const [activeCategory, setActiveCategory] = useState<Category>({
    id: "home",
    name: "Anasayfa",
  });

  const categories: Category[] = [
    { id: "home", name: "Anasayfa" },
    { id: "culture", name: "Kültür/Sanat" },
    { id: "science", name: "Bilim" },
    { id: "philosophy", name: "Felsefe" },
    { id: "politics", name: "Siyaset" },
  ];

  return (
    <div className="flex p-5 bg-foreground dark:bg-darkForeground rounded-lg flex-col gap-5">
      {/* if I center the parent div instead of this spaghetti, the posts overlow */}
      <div className="flex justify-center">
        <CategoryContainer
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <PostContainer activeCategory={activeCategory} />
    </div>
  );
}
