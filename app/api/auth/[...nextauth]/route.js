import { Users } from "@/lib/Users";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from 'next-auth/providers/github'


const configCredentialsProvider = {
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: "Email and Password",

    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
        // name: { label: "Name", type: "text", placeholder: "jsmith" },
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
    },

    async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        // Add logic here to look up the user from the credentials supplied
        // const { name, email, password } = credentials;
        const user = Users.find(usuario =>
            usuario.email === credentials?.email && usuario.password === credentials?.password)

        if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user
        } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
    },
}

// https://console.developers.google.com/apis/credentials
const configGoogleProvider = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
}

// https://github.com/settings/apps
const configGitHubProvider = {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
}

const providers = [
    CredentialsProvider(configCredentialsProvider),
    GoogleProvider(configGoogleProvider),
    GitHubProvider(configGitHubProvider)
]

export const authOptions = {
    providers,
    secret: process.env.NEXTAUTH_SECRET,
    // theme: {
    //     colorScheme: "", // "auto" | "dark" | "light"
    //     brandColor: "", // Hex color code
    //     logo: "", // Absolute URL to image
    //     buttonText: "" // Hex color code
    // }
    // session: {
    //     strategy: "jwt",
    // },
    // pages: {
    //     signIn: '/api/auth/signin',
    //     signOut: '/api/auth/signout',
    //     error: '/api/auth/error', // Error code passed in query string as ?error=
    // }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }