export default async function handler(req,res){
    fetch(`${process.env.BASE_URL}/v1/products`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        }
    })
    .then((response) => {
        return response.json();
    }).then(data => {
        console.log(data);
        res.status(200).json(data);
    }).catch(err => res.status(500))
}
