import { Request, Response } from 'express';

const successStatus = 200;

export class TelemetriesController {
  addData(req: Request, res: Response) {
    return res.sendStatus(successStatus);
  }
}