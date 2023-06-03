import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: Number,
            default: 0,
        },
    },
    { versionKey: false },
);

export default mongoose.model('user', userSchema);
