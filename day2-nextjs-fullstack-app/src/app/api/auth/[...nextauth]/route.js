import connect  from "@/utils/db"
import nextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import User from "@/models/User"
import bcrypt from "bcryptjs"
import  CredentialsProvider  from "next-auth/providers/credentials"


const handler = nextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
    id:"credentials",
    name:"Credentials",
    async authorize(credentials){
        await connect();

        try {
            const user=await User.findOne({email:credentials.email,})

            if(user)
            {
                const isPasswordCorrect= await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if(isPasswordCorrect)
                {
                    console.log("logged in successfully")
                    return user;
                }
                else{
                    throw new Error("wrong credentials")
                }

            }
            else{
                throw new Error("user not found")
            }
        } catch (error) {
            throw new Error(error)          
        }
    }
   })
  ],
//   this will show the error in the same page in the params and not in a seperate page
  pages:{
    error:"/dashboard/login",
  }
})





export {handler as GET,handler as POST}