import express from 'express';

import { StripePay, chapaPay } from '../controllers/stripe.js';

const router = express.Router();

//stripe
router.post('/stripe', StripePay);

//chapa
router.get('/chapa', chapaPay);
export default router;
