import { Category } from "@/types/Category";

type CategoryContainerProps = {
  categories: Category[];
  activeCategory: Category;
  setActiveCategory: React.Dispatch<React.SetStateAction<Category>>;
};

export default function CategoryContainer({
  categories,
  activeCategory,
  setActiveCategory,
}: CategoryContainerProps) {
  return (
    <div className="flex sm:justify-center gap-5 overflow-y-auto py-3 px-1">
      {categories.map((category) => (
        <CategoryButton
          category={category}
          key={category.id}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      ))}
    </div>
  );
}

type CategoryButtonProps = {
  category: Category;
  activeCategory: Category;
  setActiveCategory: React.Dispatch<React.SetStateAction<Category>>;
};

function CategoryButton({
  category,
  activeCategory,
  setActiveCategory,
}: CategoryButtonProps) {
  return (
    <button
      type="button"
      className={
        "p-2 transition-color duration-200 rounded-lg" +
        (activeCategory.id === category.id
          ? " bg-accentRed text-darkText"
          : " ring-2 ring-accentRed")
      }
      onClick={() => setActiveCategory(category)}
    >
      {category.name}
    </button>
  );
}
