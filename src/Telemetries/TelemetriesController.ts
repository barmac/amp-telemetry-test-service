import { Request, Response } from 'express';

import telemetriesDao, { TelemetriesDao } from './TelemetriesDao';

const successStatus = 200;
const internalServerErrorStatus = 500;

export class TelemetriesController {
  constructor(private dao: TelemetriesDao) { }

  async addData(req: Request, res: Response) {
    const data = req.body;
    try {
      await this.dao.addTelemetries(data);
    } catch (error) {
      return this.handleError(error, res);
    }

    return res.sendStatus(successStatus);
  }

  private handleError(error: Error, res: Response) {
    console.error('TelemetriesController', error);
    return res.sendStatus(internalServerErrorStatus);
  }
}

export default new TelemetriesController(telemetriesDao);
