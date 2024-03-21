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
  // TODO: this will be passed as a prop

  return (
    <div className="flex gap-5">
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
      className={
        "p-2 transition-color rounded-lg" +
        (activeCategory.id === category.id
          ? " bg-accentRed"
          : " ring-2 ring-accentRed")
      }
      onClick={() => setActiveCategory(category)}
    >
      {category.name}
    </button>
  );
}
