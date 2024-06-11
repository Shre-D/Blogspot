import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
  }
},{
  timestamps: true,
});

const User = model('User', userSchema);
export default User;