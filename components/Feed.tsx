"use client";

import { useState } from "react";
import CategoryContainer from "./CategoryContainer";
import Category from "@/types/Category";
import PostContainer from "./PostContainer";

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
    <div className="flex justify-center p-5 bg-foreground dark:bg-darkForeground rounded-lg flex-col gap-5">
      <CategoryContainer
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <PostContainer activeCategory={activeCategory} />
    </div>
  );
}
