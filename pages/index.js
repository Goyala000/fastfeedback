import { auth } from "firebase";
import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <main>
        <h1>{auth?.user?.email}</h1>

        <button onClick={(e) => auth.signInWithGitHub()}>Sign In</button>
      </main>
    </div>
  );
}
