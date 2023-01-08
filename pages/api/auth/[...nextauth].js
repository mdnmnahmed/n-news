import NextAuth from "next-auth";
import bcrypt from 'bcrypt';
import CredentialsProvider from "next-auth/providers/credentials";
import UserModal from "../../../service_backend/modals/UserModal";
import { dbConnect } from "../../../service_backend/lib/dbConnect";

export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            // credentials: {
            //     username: { label: "Username", type: "text", placeholder: "jsmith" },
            //     password: { label: "Password", type: "password" }
            // },
            async authorize(credentials, req) {
                const { email, password } = credentials;
                if (!email.trim() || !password.trim()) {
                    throw new Error(`Please enter Email & Password.`);
                }
                await dbConnect();
                const user = await UserModal.findOne({ email }).exec();
                if (!user) {
                    throw new Error(`Email & Password is incorrect, please try again.`);
                }
                const userDoc = user._doc;
                const isPasswordMatched = await bcrypt.compare(password, userDoc.password);
                if (!isPasswordMatched) {
                    throw new Error(`Email & Password is incorrect, please try again.`);
                }
                delete userDoc.password;
                return userDoc;
            }
        })
    ],
    callbacks: {
        async session(session, user) {
            console.log("session: ", session);
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user && user._id) {
                token.id = user._id;
            }
            return token;
        },
    }
})