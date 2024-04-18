import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  const appElement = screen.getByText('Welcome to Techtrust Showcase Website');
  expect(appElement).toBeInTheDocument();
});
