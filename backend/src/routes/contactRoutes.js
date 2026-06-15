import express from 'express';
import { submitContactForm, getContactMessages } from '../controllers/contactController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(submitContactForm).get(protect, getContactMessages);

export default router;
