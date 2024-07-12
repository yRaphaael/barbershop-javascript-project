const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const schedulesRoutes = require('./src/routers/schedulesRoutes');

dotenv.config();
const port = process.env.PORT;

const app = express();

connectDB();

app.use(express.json());

app.use('/api/barbershop/schedules', schedulesRoutes);

app.listen(port, () => {
    console.log(`Your server is running on port ${port}`);
});
