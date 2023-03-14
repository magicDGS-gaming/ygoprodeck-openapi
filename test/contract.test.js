const jestOpenAPI = require('jest-openapi').default;;
const request = require('supertest');
const path = require('path');

// Sets the location of your OpenAPI Specification file
jestOpenAPI(path.join(__dirname, 'ygoprodeck-api.d.yaml'));

describe('GET_cardinfo.php', () => {
  it('should satisfy OpenAPI spec', async () => {
    // Make request (supertest used here)
    const res = await request("https://db.ygoprodeck.com/api/v7").get('/cardinfo.php');
    // Make any assertions as normal
    expect(res.status).toEqual(200);
    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).toSatisfyApiSpec();
  });
});

describe('GET_randomcard.php', () => {
  it('should satisfy OpenAPI spec', async () => {
    // Make request (supertest used here)
    const res = await request("https://db.ygoprodeck.com/api/v7").get('/randomcard.php');
    // Make any assertions as normal
    expect(res.status).toEqual(200);
    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).toSatisfyApiSpec();
  });
});

describe('GET_cardsetsinfo.php', () => {
  it('should satisfy OpenAPI spec', async () => {
    // Make request (supertest used here)
    const res = await request("https://db.ygoprodeck.com/api/v7").get('/cardsetsinfo.php').query({"setcode": "SDY-046"});
    // Make any assertions as normal
    expect(res.status).toEqual(200);
    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).toSatisfyApiSpec();
  });
});
