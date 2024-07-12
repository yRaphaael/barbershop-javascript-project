const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    service: { type: String, required: true },
    price: { type: Number, required: true },
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    barberName: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    notes: { type: String }
}, {
    timestamps: true
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
