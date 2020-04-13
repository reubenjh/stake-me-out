import React from 'react';
import { render } from '@testing-library/react';
import Chart from './Chart';

test("renders chart component's wrapper element", () => {
  const { getByTestId } = render(<Chart />);
  const wrapperElement = getByTestId('chart');
  expect(wrapperElement).toBeInTheDocument();
});
