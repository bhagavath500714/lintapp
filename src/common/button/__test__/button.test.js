import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Button from '../button';

import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="click me please" />);
  expect(getByTestId('button')).toHaveTextContent('click me please');
});
