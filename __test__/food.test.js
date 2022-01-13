'use strict';

const supertest = require('supertest');
const { app } = require('../lib/server.js');
const request = supertest(app);


describe('testing the food route', () => {
  
  it('should return 200 and JSON', async () =>{

    let response = await request.get('/food?food=adobo');

    expect(response.status).toEqual(200);
    expect(response.body.food).toEqual('adobo');
  });

});

