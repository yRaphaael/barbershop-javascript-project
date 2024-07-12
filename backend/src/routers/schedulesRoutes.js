const express = require('express');
const { createSchedule, updateSchedule, findScheduleById, findAllSchedules, deleteSchedule } = require('../controllers/schedulesController');
const router = express.Router();

router.post('/', createSchedule);
router.get('/:id', findScheduleById);
router.get('/', findAllSchedules);
router.put('/:id', updateSchedule);
router.delete('/:id', deleteSchedule);

module.exports = router;
