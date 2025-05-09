const notificationSchema = new mongoose.Schema({
  email: String,
  message: String,
  type: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('Notification', notificationSchema);