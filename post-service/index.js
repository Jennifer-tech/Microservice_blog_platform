const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routes = require('./routes/postRoutes');

dotenv.config();
const app = express();
app.use(express.json());

connectDB();
app.use('/api/posts', routes);

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`Post Service running on port ${PORT}`));