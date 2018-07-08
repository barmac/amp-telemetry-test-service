import { model, Schema } from 'mongoose';

const TelemetriesSchema = new Schema(
  {
    streamInformation: Schema.Types.Mixed,
    streamHistory: Schema.Types.Mixed,
    playerStatistics: Schema.Types.Mixed,
    playerEvents: Schema.Types.Array,
    playerErrors: Schema.Types.Array,
  },
  { timestamps: true },
);

export const Telemetries = model('Telemetries', TelemetriesSchema);
