const request = require('supertest');
const app = require('../src/server');


describe('server', () => {
it('GET /healthz returns ok', async () => {
const res = await request(app).get('/healthz');
expect(res.status).toBe(200);
expect(res.body.status).toBe('ok');
});


it('GET /api/v1/hello responds with name', async () => {
const res = await request(app).get('/api/v1/hello?name=Kingsley');
expect(res.status).toBe(200);
expect(res.body.message).toContain('Kingsley');
});
});