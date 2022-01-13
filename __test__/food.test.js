'use strict';

const supertest = require('supertest');
const { app } = require('../lib/server.js');
const { db } = require('../lib/model')
const request = supertest(app);

beforeAll(async ()=> {
  await db.sync();
});

afterAll(async ()=> {
  await db.drop();
});

describe('testing the food route', () => {

  it('should read form food data', async () => {

    const response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body.count).toBeDefined();
    expect(response.body.results).toBeDefined();
  });

});

