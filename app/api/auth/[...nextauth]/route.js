import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from 'bcryptjs';

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });

                    if (!user) {
                        throw new Error("User not found");
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (!passwordMatch) {
                        throw new Error("Invalid password");
                    }

                    return {
                        id: user._id.toString(),
                        name: user.name,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        phone: user.phone,
                        email: user.email,
                        role: user.role,
                    };
                } catch (error) {
                    console.log("Error: ", error);
                    throw new Error("Authentication failed");
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/loginpage"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    name: user.name,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    phone: user.phone,
                    email: user.email,
                    role: user.role,
                };
            }
            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    name: token.name,
                    firstname: token.firstname,
                    lastname: token.lastname,
                    phone: token.phone,
                    email: token.email,
                    role: token.role,
                }
            };
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
