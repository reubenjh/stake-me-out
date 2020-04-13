import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("renders app component's wrapper element", () => {
  const { getByTestId } = render(<App />);
  const wrapperElement = getByTestId('app');
  expect(wrapperElement).toBeInTheDocument();
});
