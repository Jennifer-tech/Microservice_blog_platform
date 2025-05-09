const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const sendEmail = require('../shared-libs/utils/sendEmail');
const Notification = require('./models/notificationModel');

const app = express();
dotenv.config();
connectDB();

app.use(bodyParser.json());

app.post('/notify', async (req, res) => {
  const { type, message, email } = req.body;

  try {
    await sendEmail(email, `Notification - ${type}`, message);
    await Notification.create({ type, message, email });
    res.status(200).json({ status: 'Notification sent and saved' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 4004;
app.listen(PORT, () => console.log(`Notification Service running on port ${PORT}`));