const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: {
    default: 0,
    type: Number
  },
  no: {
    default: 0,
    type: Number
  },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model("surveys", surveySchema);
