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

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/')
  }

  return (
    <>
      {session
        ? (<UserCard user={session?.user} pagetype={"Home"} />)
        : (<h1 className="text-5xl">Please, sign in!</h1>)
      }
    </>
  )
  // if (session) redirect("/dashboard");

  // return (
  //       <main>
  //         <LoginForm />
  //       </main>
  //     );
}