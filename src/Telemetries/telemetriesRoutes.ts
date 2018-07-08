import { Request, Response, Router } from 'express';

import { TelemetriesController } from './TelemetriesController';

const router = Router();
const telemetriesController = new TelemetriesController();

router.post('/', (req: Request, res: Response) => telemetriesController.addData(req, res));

export { router };
