import dayjs from "dayjs";

type Comment = {
  id: string;
  uid: string;
  content: string;
  createdAt: dayjs.Dayjs;
  updatedAt: dayjs.Dayjs;
  likes: number;
  dislikes: number;
};

export default Comment;
