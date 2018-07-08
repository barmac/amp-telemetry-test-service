import request from 'supertest';

import { router } from './TelemetriesRoutes';

describe('Telemetries Controller', () => {
  it('should send status 200 for a request', () => {
    request(router)
      .post('/')
      .expect(200);
  });
});

