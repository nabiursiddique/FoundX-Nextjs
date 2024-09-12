import { ReactNode } from "react";

const layout = ({
  children,
  recentPosts,
}: {
  children: ReactNode;
  recentPosts: ReactNode;
}) => {
  return (
    <>
      {children}
      {recentPosts}
    </>
  );
};

export default layout;
