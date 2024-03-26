import type Category from "@/types/Category";
import dayjs from "dayjs";
import Post from "@/components/utils/Post";

export default function PostContainer({
  activeCategory,
}: {
  activeCategory: Category;
}) {
  return (
    <div className="flex flex-col gap-5">
      <Post
        key="1"
        id="12"
        uid="1234"
        title="Post Title safe accurate suppose nearer street even control spoken soon second freedom receive bit apart pie chicken sentence silver drink missing exclaimed roll feature became dinner basis having older carried about aloud mean wrote vowel bet chamber wing directly game sugar week opinion pale raise conversation car heart neighborlaid week behavior cream cookies edge wheat free tonight center shall throughout room wait magic tower by headed rest done hot season nature sale"
        content="Post Content AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH feathers leather dress correctly fifty recall golden dog disappear audience exclaimed rich hill finger especially sing skin eager sit once we task later highest chance cutting pig share tightly poetry arrow happened herd harder week song average wear active strength related full excitement zoo finish wheel wide leather"
        category={{ id: "asdfsdf", name: "Category Name" }}
        createdAt={dayjs("2023-11-11")}
        updatedAt={dayjs("2023-12-1")}
        likes={5}
        dislikes={1}
        comments={3}
      />
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
