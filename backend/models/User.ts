import mongoose from "mongoose";

// a structure of the user
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true
    },
  birthday: {
      type: String,
    },
    display_name: {
      type: String,
      unique: true
    },
    bio: {
      type: String,
    },
    profile_image_url: {
      type: String,
    },
    profile_banners: {
      type: String,
    },
    followers_count: {
      type: Number,
    },
    followings: {
      type: Array,
      default: []
    },
    followers: {
      type: Array,
      default: []
    },
    following_count: {
      type: Number,
    },
    verified: {
      type: Boolean,
    },
    email: {
      type: String,
      required: [true, "PLease add an emailvalue"],
    },
    password: {
      type: String,
      required: [true, "PLease add a password value"],
    },
    country: {
      type: String,
    },
    website: {
      type: String,
    }, 
    location: {
      type: String,
    },
    language: {
      type: String,
    },
    profession: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
