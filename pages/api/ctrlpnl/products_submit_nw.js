export default async function handler(req, res) {
//only post method available
  if (req.method === 'POST') {
    try {
        const { name, price, images } = req.body;
        const checkedNew = (price).split('.').join("");
        console.log(images)
        const paramsForImages = new URLSearchParams({images, name});
        console.log(paramsForImages)
        var fetchProducts = fetch(`${process.env.BASE_URL}/v1/products`, {
        method: 'POST',
        body: paramsForImages,
        headers: {
            'Accept': 'application/json',
            "content-type": 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        }
        }).then((response) => {
            return response.json();
        }).then(data => {
            console.log(data)
            fetchProducts = data;
           
            var params = new URLSearchParams({"product": fetchProducts.id, "currency": 'eur', "unit_amount": checkedNew});
            return fetch(`${process.env.BASE_URL}/v1/prices`, {
                method: 'POST',
                body: params,
                headers: {
                    'Accept': 'application/json',
                    "content-type": 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
                }
            })
        }).then((response) => {
            return response.json();
        }).then(data => {
            
            res.status(200).json(data);
        })
} catch (err) {
    res.status(err.statusCode || 500).json(err.message);
}
} else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
}
}
