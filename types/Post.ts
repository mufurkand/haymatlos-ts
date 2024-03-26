import dayjs from "dayjs";
import type Category from "@/types/Category";

type Post = {
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

export default Post;
