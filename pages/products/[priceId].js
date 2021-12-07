import Stripe from "stripe"
import Image from "next/image"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../redux/reducers/cartSlice'

const Retrieveid = ({ product_price }) => {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    const product_declared  = product_price.product;

    return (
        
        <div className="h-screen">
        <div className="flex flex-col items-center">
            <div>{product_declared.name}</div>
            
            <Image
                src={product_declared.images[0]}
                alt={product_declared.name}
                width={400}
                height={400}
            />
            <div>Cena: €{((product_price.unit_amount) / 100).toFixed(2)}</div>
            <button onClick = {() => dispatch(addToCart(product_declared.id))}>Add</button>

        </div>
        </div>
    )
}

export default Retrieveid

export async function getStaticPaths(){
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2020-08-27'
    });
    const prices = await stripe.prices.list({
        active: true
      });
    
    const paths = prices.data.map(price => {
        
        return {
            params: {
                priceId: `${price.id}`
            }
        }
    })
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context){
    const { params } = context
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2020-08-27'
    });
    const product_price = await stripe.prices.retrieve(
        `${params.priceId}`,
        {
            expand: ['product']
        }
        );
return {
    props: {
        product_price
    },
    revalidate: 10
}
}
