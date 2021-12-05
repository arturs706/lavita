import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../utils/dbconnection"
import Stripe from 'stripe';  
import FacebookProvider from "next-auth/providers/facebook"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27'
});

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      }),
      
    ],
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60 // 30 days
    },
    secret: process.env.SECRET,
    callbacks: {
      //destructures the user details from session
      async signIn({ user, account }) {
        // console.log(user, account)
      // fetch all users
        const customers = await stripe.customers.list();
      // fetch user emails
        const emailCheck = customers.data.map(singleCustomer => singleCustomer.email);
      // check if such an email exists within the user email list
        const booleanEmail = emailCheck.includes(user.email);
      // check if user is allowed to log in
        const isAllowedToSignIn = true
      // if is allowed to login and email does not exist, we are creating Stripe user
      // furthermore we are adding in metadata the user ID's in our database
      const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      
      const newMondo = await MongoDBAdapter(clientPromise)
      const newMondo2 = await newMondo.getUserByEmail(user.email)
      const newMondo3 = newMondo2.id
      
        if (isAllowedToSignIn && !booleanEmail) {
           const customer = await stripe.customers.create({
            email: user.email,
            name: capitalizeFirstLetter(user.name),
            metadata: {
              user_id: account.providerAccountId,
              db_id: newMondo3
            }
            
          })
          return true
          
        // if user email exists we are only allowing to sign in
        } else if (isAllowedToSignIn) {
          return true
        }
      // not allowed to sign in
        else {
          return'/unauthorized'
          // Or you can return a URL to redirect to:
      // return '/unauthorized'
        }
      }
    }
  })
