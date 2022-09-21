import { fetchArticle } from './fetchArticle';
jest.mock('axios', () => ({
  get: jest.fn().mockImplementation(() =>
    Promise.resolve({
      body: { result: { title: 'test article', content: 'test article' } }
    })
  )
}));

test('fetchArticle', async () => {
  expect((await fetchArticle()).body.result).toEqual({ title: 'test article', content: 'test article' });
});
