const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                default: "TBD"
                // required: true,
                // trim: true
            },
            name: {
                type: String,
                required: true,
                default: "Default"
            },
            distance: {
                type: Number,
                default: 0
            },
            duration: {
                type: Number,
                default: 0
            },
            weight: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },

        }
    ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;