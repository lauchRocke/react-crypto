const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String
        },
        email: {
            type: String,
        },
        password: {
            type: String
        },
        role: {
            type: String,
            enum: ["normal", "admin"],

          },
        created: {
           type: Date,
           default: Date.now
          }
    }, {
        timestamp: true
    });

    module.exports = mongoose.model('User', userSchema);