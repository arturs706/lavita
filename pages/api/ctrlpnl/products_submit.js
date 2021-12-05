import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27'
});

export default async function handler(req, res) {
//only post method available
  if (req.method === 'POST') {
    try
{
    const { name, price, images } = req.body;
    const checkedNew = (price).split('.').join("");
    const product = await stripe.products.create({
        name,
        images
    });
    // const checkedNew = (price.price).split('.').join("");
    const price_prod = await stripe.prices.create({
      "product": product.id,
      "currency": 'eur', 
      "unit_amount": checkedNew
 });
    res.status(200).json({ product, price_prod });

  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
} else {
  res.setHeader('Allow', 'POST');
  res.status(405).end('Method Not Allowed');
}
}
    


