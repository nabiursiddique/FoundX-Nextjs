import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";

const LogInPage = () => {
  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Login With FoundX</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <form>
          <div className="py-3">
            <Input type="text" />
          </div>
          <div className="py-3">
            <Input type="text" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </form>
        <div className="text-center">
          Don&lsquo;t have an account? <Link href={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
