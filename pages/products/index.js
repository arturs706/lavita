import Stripe from "stripe"
import Image from "next/image"
import Link from "next/link"

export default function Index({ prices }) {
    
    return (
        
        prices.data.map((price) =>
           
        <div key = {price.id} className ="flex flex-wrap flex-row bg-yellow-900 w-full justify-center overflow-hidden">
            {
                
            price.product.active === true
            ?   (<div className ="flex flex-wrap flex-col bg-brand-50" >  
            {
                price.product.images[0] === undefined 
                ?   <div>No photo at the moment</div>
                :   <div className ="p-3">
                    <Image
                    src={price.product.images[0]}
                    alt={price.product.name}
                    width={400}
                    height={400}
                    />
                    </div>   
            }
            <div>{price.product.name}</div>
            <p>Cena: €{((price.unit_amount) / 100).toFixed(2)}</p>
            <Link href={`/products/${price.id}`}>Check the product out</Link>
            </div>) 
            : null
            }

            
        </div>
        )

    )
}



export async function getStaticProps(){
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2020-08-27'
    });
    const prices = await stripe.prices.list({
        active: true,
        expand: ["data.product"],
      });
return {
    props: {
        prices
    },
    revalidate: 10
}
}
