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
  const randomNumber = Math.floor(Math.random() * 1000000);
  const randomString = 'daniel-chap' + randomNumber;
  var options = {
    method: 'POST',
    url: 'https://api.chapa.co/v1/transaction/initialize',
    headers: {
      Authorization: process.env.chapaKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: req.body.amount,
      currency: 'ETB',
      email: 'danielnigatu09@gmail.com',
      first_name: 'Daniel',
      last_name: 'Nigatu',
      phone_number: '0916213371',
      tx_ref: randomString,
      callback_url: 'https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60',
      return_url: 'https://e-gebiya.vercel.app/',
      'customization[title]': 'Payment for my favourite merchant',
      'customization[description]': 'I love online payments',
    }),
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.status(200).json(response.body);
  });
};

export const chapaPayVerify = async (req, res, next) => {
  const code = await Promise.resolve(chapaPay(req, res, next));
  console.log(code);
};
