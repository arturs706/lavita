import { getSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function Page({ data: session }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  if (session) {
  return(
    <div>
    <div><h2>{capitalizeFirstLetter(session.user.name)}</h2></div>
    <div>
      <Link href="/checkout">Checkout</Link>
    </div>
    <div>
      <Link href="/ctrlpnl/products">Control Panel</Link>
    </div>
    <Link href="/api/auth/signout">
    <a onClick = {e => {
          e.preventDefault()
          signOut()
          }}><h2>Sign Out</h2> 
          </a>
    </Link>
    
    </div>
  )
}
  if (!session) {
    return (
      <div>
      <Link href="/api/auth/signin">
      <a onClick = {e => {
            e.preventDefault()
            signIn()
            }}><h2>Sign In</h2> 
            </a>
      </Link>

      </div>
    )
  }
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  return {
    props: {
      data: session
    },
  }
}