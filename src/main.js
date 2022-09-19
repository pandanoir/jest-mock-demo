test('jest.fn() のテスト', () => {
  const f = jest.fn();
  [1, 2, 3].map(f);
  expect(f).toBeCalledTimes(3);
});

test('jest.fn() のテスト(mockImplementation あり)', () => {
  const f = jest.fn().mockImplementation((n) => n * 2);
  expect([1, 2, 3].map(f)).toEqual([2, 4, 6]);
  expect(f).toBeCalledTimes(3);
});

test('jest.fn() のテスト(mockClear)', () => {
  const f = jest.fn();
  f();
  f.mockClear();
  expect(f).not.toBeCalled(); // 呼び出し回数がリセットされて0になっている
});

describe('', () => {
  const f = jest.fn();
  afterEach(() => {
    jest.clearAllMocks(); // 全てのモック関数の呼び出し回数をリセットする
  });
  test('jest.fn() のテスト', () => {
    f();
    expect(f).toBeCalledTimes(1);
  });
  test('jest.fn() のテスト', () => {
    f();
    expect(f).toBeCalledTimes(1);
  });
});

test('jest.spyOn', () => {
  const obj = {
    method: () => {
      console.log('called');
    }
  };
  const spy = jest.spyOn(obj, 'method');
  obj.method(); // ちゃんとログに called が表示される
  expect(spy).toBeCalled();
});

test('jest.spyOn', () => {
  obj.method = jest.fn();
  obj.method(); // ログに called と表示されない
});

expect(require('axios')).toBe(require('axios')); // require('axios') === require('axios')

beforeEach(() => {
  jest.resetModules();
  jest.unmock('../utils');
});
it('モックしないテスト', () => {
  const add = require('../utils').add;
  expect(add(1, 2)).toBe(3);
});
it('モックのテスト', () => {
  jest.mock('../utils', () => ({ add: () => 42 }));
  const add = require('../utils').add;
  expect(add(1, 2)).toBe(42);
});
it('モックしないテスト', () => {
  const add = require('../utils').isLine;
  expect(add(1, 2)).toBe(3);
});
