import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27'
});

export default async function handler(req, res) {

  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const { price, quantity, emailDetails } = req.body;
      const customers = await stripe.customers.list();
      // res.status(200).json({ customers })
      for (let x = 0; x < customers.data.length; x = x+1){
        let assignArray = customers.data[x];
        let {id, email} = assignArray;
        if (email == emailDetails){
            var customer = id;
            break;  
        }
    }
      const session = await stripe.checkout.sessions.create({
        customer,
        payment_method_types: ['card'],
        line_items: [
          {
            price,
            quantity
          }
        ],
        //line_items: req?.body?.items?? [],
        mode: 'payment',
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.status(200).json({ sessionId: session.id});
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}