beforeEach(() => {
  jest.resetModules();
});
it('モジュールキャッシュがあるのでモックできていない', () => {
  expect(require('./A').B).toBe(require('./A').B); // 同一
  const oldB = require('./A').B;
  jest.doMock('./B', () => ({ B: jest.fn() }));

  expect(oldB).toBe(require('./A').B); // require の結果が同一
  jest.unmock('./B');
});

it('モジュールキャッシュをクリアすればモックできる', () => {
  const oldB = require('./A').B;
  jest.resetModules(); // モジュールキャッシュを全てクリアする
  jest.doMock('./B', () => ({ B: jest.fn() }));

  expect(oldB).not.toBe(require('./A').B); // require の結果が異なる
  jest.unmock('./B');
});
