import { Telemetries } from './TelemetriesModel';

export class TelemetriesDao {
  addTelemetries(data: object) {
    return new Telemetries(data).save();
  }
}

export default new TelemetriesDao();
