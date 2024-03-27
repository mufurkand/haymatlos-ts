"use client";

import CategoryContainer from "@/components/CategoryContainer";
import PageContainer from "@/components/PageContainer";
import Button from "@/components/utils/Button";
import Input from "@/components/utils/Input";
import Textarea from "@/components/utils/Textarea";
import Category from "@/types/Category";
import { useState } from "react";

export default function Post() {
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
        <Button type="submit">Gönder</Button>
      </form>
    </PageContainer>
  );
}
