import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler (req, res){
    if(req.method === 'POST'){
        try{
            const params ={
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    { shipping_rate: 'shr_1N7o2HFDUOXySoFe6RImNDdL'},
                    { shipping_rate: 'shr_1N7o7XFDUOXySoFeQFvNiYEV'}
                ],
                line_items: req.body.map((item) =>{
                    const img = item.images[0].asset._ref;
                    const newImage = img.replace('image-', '');
                
                    return {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: 'item.name',
                                images: [newImage],
                            },
                            unit_amount: item.price * 1000,
                        },
                        adjustable_quantity: {
                            enable: true,
                            minimum: 1,
                    },
                    quantity: item.quantity,
                    }
                }),
                success_url: 'https://example.com/success',
                cancel_url: 'https://example.com/cancel',
            };
            const checkoutSession = await stripe.checkout.sessions.create(params);
            res.status(200).json(checkoutSession);
        } catch (err){
            res.status(500).json({statusCode: 500, message: err.message});
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

         