import { loadStripe } from '@stripe/stripe-js';
import { getSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
// 
  export default function Checkout({ data: session }) {
    const counter = useSelector((state) => state.counter)
    console.log(counter)
    const dispatch = useDispatch();
      if (session){
      const details = session.user.email;
      const handleClick = async (event) => {
          // Call the backend to create the Checkout session.
          const { sessionId } = await fetch('/api/checkout-sessions', {
              method: 'POST',
              headers: { 'content-Type': 'application/json'},
              //within the body you can pass the quantity of products and products themselves
              body: JSON.stringify({price: 'price_1K0MnIDRFTiRmgTH76eBhr3I', quantity: counter.length, emailDetails: details })
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
          counter.map((product_id) => {
            
          })
        return (
        <div>
            {
            counter.length <= 0 
            ?<div>
                <div>Iepirkšanās grozs ir tukšs.</div>
                <Link href="/products">Sākt iepirkties</Link>
            </div>
            : counter.map((product_price_id) => {
                
                return (
                   <div key={product_price_id.id}>{product_price_id.quantity}</div>
                )
            }) 
            }
            
        </div>
    )

    }
  }




  export async function getServerSideProps(ctx) {
    const session = await getSession(ctx);
    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=http://localhost:3000/bag`,
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