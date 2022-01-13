'use strict';

const supertest = require('supertest');
const { app } = require('../lib/server.js');
const { db } = require('../lib/model');
const request = supertest(app);

beforeAll(async ()=> {
  await db.sync();
});

afterAll(async ()=> {
  await db.drop();
});

const foodData = {
  food: 'Adobo',
  protein: 'Chicken',
};

const foodData2 = {
  food: 'BLT',
  protein: 'Pork',
};

xdescribe('testing the food route', () => {

  it('should read form food data', async () => {

    const response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body.count).toBeDefined();
    expect(response.body.results).toBeDefined();
  });

});

describe('testing creating food', () => {

  it('should respond with 200 with creating using POST', async () => {
    const response = await request.post('/food').send(foodData);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
  });

});
