import express from 'express';

import { StripePay } from '../controllers/stripe.js';

const router = express.Router();

//stripe
router.post('/stripe', StripePay);

export default router;
