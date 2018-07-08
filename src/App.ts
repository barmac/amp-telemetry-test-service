import express from 'express';

import { config } from './config';
import { router as telemetriesRouter } from './Telemetries';

const app = express();

app.use('/telemetries', telemetriesRouter);

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
