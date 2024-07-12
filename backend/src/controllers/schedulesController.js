const Schedule = require('../models/schedulesModel');

const createSchedule = async (req, res) => {
    try {
        const { service, price, customerName, email, barberName, appointmentDate, notes } = req.body;

        console.log("Received data: ", req.body);  // Log para verificar os dados recebidos

        const newSchedule = new Schedule({
            service,
            price,
            customerName,
            email,
            barberName,
            appointmentDate,
            notes
        });

        const savedSchedule = await newSchedule.save();

        console.log("Saved schedule: ", savedSchedule);  // Log para verificar os dados salvos

        res.status(201).json(savedSchedule);
    } catch (error) {
        console.error("Error creating schedule: ", error);  // Log para erros
        res.status(500).json({
            message: "Error creating schedule"
        });
    }
};


const findScheduleById = async (req, res) => {
    try {
        const scheduleId = req.params.id;

        const schedule = await Schedule.findById(scheduleId);

        if (!schedule) {
            res.status(404).json({ message: "Schedule not found" });
        }

        res.status(200).json(schedule);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching schedule"
        });
    }
};

const findAllSchedules = async (_req, res) => {
    try {
        const schedules = await Schedule.find();

        res.status(200).json(schedules);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Error fetching schedules" });
    }
};

const updateSchedule = async (req, res) => {
    try {
        const scheduleId = req.params.id;

        const { service, price, customerName, email, barberName, appointmentDate, notes } = req.body;
        
        const schedule = await Schedule.findById(scheduleId);

        if (!schedule) {
            res.status(404).json({
                message: "Schedule not found"
            });
        }

        schedule.service = service;
        schedule.price = price;
        schedule.customerName = customerName;
        schedule.email = email;
        schedule.barberName = barberName;
        schedule.appointmentDate = appointmentDate;
        schedule.notes = notes;

        await schedule.save();

        res.status(200).json(schedule);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error updating schedule"
        });
    }
};

const deleteSchedule = async (req, res) => {
    try {
        const scheduleId = req.params.id;

        const scheduleDeleted = await Schedule.findByIdAndDelete(scheduleId);

        if (!scheduleDeleted) {
            return res.status(404).json({
                message: "Schedule not found"
            });
        }

        res.status(200).json({
            message: "Schedule deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error deleting schedule"
        });
    }
};

module.exports = {
    createSchedule,
    findScheduleById,
    findAllSchedules,
    updateSchedule,
    deleteSchedule
};
