import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Admin Layout</h1>
      {children}
    </div>
  );
};

export default layout;
