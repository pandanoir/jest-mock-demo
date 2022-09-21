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

test('mockClear を呼ぶと呼び出し回数がリセットされる', () => {
  const f = jest.fn();
  f();
  f.mockClear();
  expect(f).not.toBeCalled(); // 呼び出し回数がリセットされて0になっている
});

describe('clearAllMocks を使う', () => {
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
