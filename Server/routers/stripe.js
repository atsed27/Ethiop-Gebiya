import express from 'express';

import { StripePay, chapaPay, chapaPayVerify } from '../controllers/stripe.js';

const router = express.Router();

//stripe
router.post('/stripe', StripePay);

//chapa
router.post('/chapa', chapaPay);

//chapa verify
router.get('/chapa/vi', chapaPayVerify);

export default router;
