const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  profileImage: {
    type: String,
    default: '',
  },
  bio: {
    type: String,
    max: 100,
    default: '',
  },
  totalStudyTime: {
    type: Number,
    default: 0,
  },
  focusScore: {
    type: Number,
    default: 0,
  },
  badges: [{
    type: String,
    enum: ['early_bird', 'night_owl', 'focused_mind', 'social_butterfly', 'study_master'],
  }],
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  favoriteRooms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
  }],
  createdRooms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
  }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
