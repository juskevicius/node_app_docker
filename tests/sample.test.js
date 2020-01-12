const request = require('supertest');
const app = require('../app');

describe('Get endpoint', () => {
  it('Should test that true === true', () => {
    expect(true).toBe(true);
  });

  it('Should return the webpage', async () => {
    const res = await request(app)
      .get('/');

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Super duper webpage failing test');
  });
});
