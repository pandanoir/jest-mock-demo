/**
 * @jest-environment jsdom
 */
import { Article } from './Article';
import { render } from '@testing-library/react';
import React from 'react';
jest.mock('axios', () => ({
  get: jest.fn().mockImplementation(() =>
    Promise.resolve({
      body: { result: { title: 'test article', content: 'test article' } }
    })
  )
}));
test('記事が表示できるか', async () => {
  const { findByRole } = render(<Article id="test" />); // モック結果が使われる
  await findByRole('main');
});

// テストケースごとにモックを切り替えたい
jest.isolateModules(() => {
  const { render } = require('@testing-library/react'); // 再度 import する必要がある
  jest.doMock('axios', () => ({
    get: jest.fn().mockResolvedValue({
      body: { result: { title: 'test article1', content: 'test article' } }
    })
  }));
  const { Article } = require('./Article');
  test('記事A', async () => {
    const { findByRole } = render(<Article id="test" />); // モック結果が使われる
    await findByRole('main');
  });
});
jest.isolateModules(() => {
  const { render } = require('@testing-library/react'); // 再度 import する必要がある
  jest.doMock('axios', () => ({
    get: jest.fn().mockResolvedValue({
      body: { result: { title: 'test article2', content: 'test article' } }
    })
  }));
  const { Article } = require('./Article');
  test('記事B', async () => {
    const { findByRole } = render(<Article id="test" />); // モック結果が使われる
    await findByRole('main');
  });
});
