const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const routes = require('./src/route/index');
const seedData = require('./src/seed/seed');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Seed the database with admins
seedData();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:4200', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'X-Knowledge-Base-Id'],
  credentials: true,
  maxAge: 3600,
}));

// Use the routes
app.use('/api/v1', routes);

// Define PORT and HOST properly for Kubernetes
const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0'; // Important for Kubernetes

// Start the server listening on all network interfaces
app.listen(PORT, HOST, () => {
    console.log(`✅ Server is running on http://${HOST}:${PORT}`);
});
