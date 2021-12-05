import { loadStripe } from '@stripe/stripe-js';
import { getSession, GetSessionParams, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from 'react';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
// 
  export default function Products({ data: session }) {
      const[name, setName] = useState('');
      const[price, setPrice] = useState('');
      const[images_set, setImages_set] = useState({ first_Image: '', second_Image: '', third_Image: '' });
      const images = [images_set.first_Image,images_set.second_Image, images_set.third_Image];
      
      if (session){

      const details = session.user.email;
      
      const handleClick = async () => {
        const response = await fetch('/api/ctrlpnl/products_submit', {
              method: 'POST',
              body: JSON.stringify({name, price, images}),
              headers: { 
                  'Content-Type': 'application/json'
                },
          })
          const data = await response.json()
          return data;
        }
        return (
        <div>
            <div>
            <form onSubmit = {handleClick}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                ></input>
                <input 
                    type="text" 
                    value={price} 
                    onChange={e => setPrice(e.target.value)}
                    placeholder="Price"
                ></input>
                <input 
                    type="text"
                    value={images_set.first_Image} 
                    onChange={e => setImages_set({...images_set, first_Image: e.target.value})}
                    placeholder="First Image"
                ></input>
                <input 
                    type="text" 
                    value={images_set.second_Image} 
                    onChange={e => setImages_set({...images_set, second_Image: e.target.value})}
                    placeholder="Second Image"
                ></input>
                <input 
                    type="text"
                    
                    value={images_set.third_Image} 
                    onChange={e => setImages_set({...images_set, third_Image: e.target.value})}
                    placeholder="Third Image"
                ></input>
            <button type="submit">Submit</button>
            </form>
            </div>
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
                destination: `/api/auth/signin?callbackUrl=http://localhost:3000/ctrlpnl/products`,
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