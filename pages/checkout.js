import { loadStripe } from '@stripe/stripe-js';
import { getSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
// 
  export default function Checkout({ data: session }) {
      if (session){
      const random = Math.floor(Math.random() * 10);
      const details = session.user.email;
      const handleClick = async (event) => {
          // Call the basckend to create the Checkout session.
          const { sessionId } = await fetch('/api/checkout-sessions', {
              method: 'POST',
              headers: { 'content-Type': 'application/json'},
              //within the body you can pass the quantity of products and products themselves
              body: JSON.stringify({price: 'price_1K0MnIDRFTiRmgTH76eBhr3I', quantity: random, emailDetails: details })
          }).then(res => res.json())

          // When the customer clicks on the button, redirect to the checkout
          const stripe = await stripePromise;
          const { error } = await stripe.redirectToCheckout({
            sessionId,
          });
        }
        const capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
        return (
        <div>
            <button role="link" onClick={handleClick}>
                Checkout
            </button>
            <Link href="/api/aut/signout">
            <a onClick = {e => {
                e.preventDefault()
                signOut()
                }}><h2>Sign Out</h2> 
            </a>
            </Link>
        </div>
    )
    }
  }




  export async function getServerSideProps(ctx) {
    const session = await getSession(ctx);
    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=http://localhost:3000/checkout`,
                permanent: false,
        }
        }
    }
    return {
      props: {
        data: session
      },
    }
  }