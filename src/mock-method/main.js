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
