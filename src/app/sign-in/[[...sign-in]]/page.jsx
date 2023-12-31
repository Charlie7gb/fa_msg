import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container-fluid d-flex justify-content-center mt-5">
      <div className="justify-content-center align-items-center mt-5">
        <SignIn />
      </div>
    </div>
  );

}