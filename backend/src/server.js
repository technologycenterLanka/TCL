import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Routes
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

// Middleware
app.use(cors());
app.use(express.json());

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Atlantic Bridge Exchange API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
