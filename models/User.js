import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
              type: String,
              required: true,
              minLength: [3, 'Must have 3 letters']
            },
  password: {
              type: String,
              required: true,
              minLength: [3, 'Must have 3 letters']
            }
})

const User = mongoose.model('User', userSchema)

export default User;
