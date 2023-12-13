import express from 'express';

import { StripePay, chapaPay } from '../controllers/stripe.js';

const router = express.Router();

//stripe
router.post('/stripe', StripePay);

//chapa
router.post('/chapa', chapaPay);
export default router;
