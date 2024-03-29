import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  displayName: String,
  avatar: String,
  type: {
    type: String,
    require: true,
  },
});

const User = model('User', userSchema);
export default User;
