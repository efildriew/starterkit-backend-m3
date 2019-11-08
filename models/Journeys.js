const mongoose = require('mongoose');

const { Schema } = mongoose;

const journeySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      // required: true,
    },
    // location: {
    //   type: [Number],
    //   required: true,
    // },
    // destinations: {
    //   type: [[Number]],
    //   required: true,
    // },
    originLongitude: Number,
    originLatitude: Number,
    destinationLongitude: Number,
    destinationLatitude: Number,
    time: Number,
    users: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const Journey = mongoose.model('Journey', journeySchema);

module.exports = Journey;
