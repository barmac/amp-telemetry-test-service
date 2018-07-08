import { Request, Response, Router } from 'express';

import telemetriesController from './TelemetriesController';

const router = Router();

router.post('/', (req: Request, res: Response) => telemetriesController.addData(req, res));

export { router };
