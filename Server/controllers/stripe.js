import stripePackage from 'stripe';
import request from 'request';
const stripe = stripePackage(process.env.Stripe);

export const StripePay = async (req, res, next) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};

export const chapaPay = async (req, res, next) => {
  var options = {
    method: 'POST',
    url: 'https://api.chapa.co/v1/transaction/initialize',
    headers: {
      Authorization: process.env.chapaKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: '100',
      currency: 'ETB',
      email: 'Danielnigatu09@gmail.com',
      first_name: 'Daniel',
      last_name: 'Nigatu',
      phone_number: '0916213371',
      tx_ref: 'chewatatest-21233',
      callback_url: 'https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60',
      return_url: 'https://www.google.com/',
      'customization[title]': 'Payment for my favourite merchant',
      'customization[description]': 'I love online payments',
    }),
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    const da = response.body;
    res.status(200).json(response.body);
  });
};
