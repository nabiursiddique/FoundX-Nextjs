import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>This is user layout</h1>
      {children}
    </div>
  );
};

export default layout;
