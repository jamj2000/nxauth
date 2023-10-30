/*
Basado y simplificado desde 
- https://youtu.be/w2h54xz6Ndw?si=VNp_hnIZFv-QN97I
- https://github.com/gitdagray/next-auth-intro

Otro tutorial
- https://youtu.be/PEMfsqZ2-As?si=nyzsgZ35PzEVSWXD
- https://github.com/Godsont/auth-with-credentials

*/
import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";

// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";

// export default async function Home() {
//   const session = await getServerSession(authOptions);

//   if (session) redirect("/dashboard");

//   return (
//     <main>
//       <LoginForm />
//     </main>
//   );
// }

// Can view providers in http://localhost:3000/api/auth/providers
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route"
import UserCard from "@/components/UserCard"
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions)

  // if (!session) {
  //   redirect('/api/auth/signin?callbackUrl=/')
  // }

  // if (session) redirect("/dashboard");
  return (
    <>
      {session
        ? (<UserCard user={session?.user} pagetype={"Home"} />)
        : (
          <>
            <h1 className="text-5xl">
              Please, <Link href="/api/auth/signin?callbackUrl=/">sign in!</Link>
            </h1>
            <p>You can login with the following credentials: </p>
              <ul>
                <li>user1@example.com / 1234</li>
                <li>user2@example.com / 2345</li>
                <li>user3@example.com / 3456</li>
              </ul>
          </>
        )
      }
    </>
  )

}