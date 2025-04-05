const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  discountValue: { type: Number, required: true }
});

const bookingRequestSchema = new mongoose.Schema({
  reference_number: { type: Number, required: true },
  coupon_code: { type: Number, required: true },
  show_id: { type: Number, required: true },
  tickets: [{ type: Number, required: true }] 
});

const userSchema = new mongoose.Schema({
  userid: { type: Number,},
  email: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  contact: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  isLoggedIn: { type: Boolean, default: false },
  uuid: { type: String },
  accesstoken: { type: String },
  coupens: [couponSchema], 
  bookingRequests: [bookingRequestSchema] 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
