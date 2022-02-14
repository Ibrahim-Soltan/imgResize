import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('test endpoint responses', () => {
  it('should return status 200 when placeholder is passed', async () => {
    const response = await request.get(
      '/api/?filename=placeholder&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
  it('should return status 200 when an exsisting image filename is passed', async () => {
    const response = await request.get(
      '/api/?filename=fjord.jpg&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
  it('should return status 404 when the image required is not found', async () => {
    const response = await request.get(
      '/api/?filename=notfound.jpg&width=200&height=200'
    );
    expect(response.status).toBe(404);
  });
  it('should return status 400 when non-numerical data is sent as width and/or height', async () => {
    const response = await request.get(
      '/api/?filename=placeholder&width=20a&height=200'
    );
    expect(response.status).toBe(400);
  });
});
