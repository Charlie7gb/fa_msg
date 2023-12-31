import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="justify-content-center align-items-center">
        <SignIn />
      </div>
    </div>
  );

}