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
      amount: req.body.amount,
      currency: 'ETB',
      email: 'danielnigatu09@gmail.com',
      first_name: 'Daniel',
      last_name: 'Nigatu',
      phone_number: '0916213371',
      tx_ref: req.body.tx_ref,
      callback_url: `https://e-gebiya-k75e.onrender.com/api/pay/chapa/${req.body.tx_ref}`,
      return_url: 'https://e-gebiya-k75e.onrender.com/',
      'customization[title]': 'Payment for my favourite merchant',
      'customization[description]': 'I love online payments',
    }),
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response);
    res.status(200).json(response.body);
  });
};

export const chapaPayVerify = async (req, res, next) => {};
