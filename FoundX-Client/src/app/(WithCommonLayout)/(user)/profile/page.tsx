import Post from "@/src/components/UI/Post";
import { getMyPosts } from "@/src/services/Post";
import { IPost } from "@/src/types";

const User = async () => {
  const { data } = await getMyPosts();
  return (
    <>
      {data?.length ? (
        data?.map((post: IPost) => <Post key={post._id} post={post} />)
      ) : (
        <div className="flex min-h-screen w-full items-center justify-center rounded-md bg-default-100">
          <h1 className="text-4xl">No Post Found!</h1>
        </div>
      )}
    </>
  );
};

export default User;
