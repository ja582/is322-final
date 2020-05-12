import { SearchTitle } from '../api/TheMovieDb';

describe('movies api', () => {
  it('should search movies by title', async () => {
    const res = await SearchTitle('Cars', 2006);
    expect(res).toHaveProperty('data');
    expect(res.data).toHaveProperty('results');
  }, 30000);
});
