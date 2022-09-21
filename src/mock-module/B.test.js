import { B } from './B';
jest.mock('./B', () => ({ B: 42 })); // import より前(=キャッシュがない状態)で実行される

it('jest.mock は import より先に実行される', () => {
  expect(B).toBe(42); // モックされている
});
