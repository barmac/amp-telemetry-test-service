import express from 'express';
import mongoose from 'mongoose';

import { config } from './config';
import { router as telemetriesRouter } from './Telemetries';

mongoose.connect(process.env.DB_URL);
mongoose.Promise = global.Promise;
const dbConnection = mongoose.connection;

dbConnection.on('error', (error: any) => console.error('MongoDB connection error.', error));
dbConnection.once('open', () => console.log('Connected to MongoDB database: ' + dbConnection.db.databaseName));

const app = express();

app.use('/telemetries', telemetriesRouter);

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
