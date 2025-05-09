const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routes = require('./routes/commentRoutes');

dotenv.config();
const app = express();
app.use(express.json());

connectDB();
app.use('/api/comments', routes);

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => console.log(`Comment Service running on port ${PORT}`));