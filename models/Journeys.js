const mongoose = require("mongoose");

const { Schema } = mongoose;

const journeySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    startLocation: {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      },
      name: String
    },
    endLocation: {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      },
      name: String
    },
    time: String,
    users: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Journey = mongoose.model("Journey", journeySchema);

module.exports = Journey;
