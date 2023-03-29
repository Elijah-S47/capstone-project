import { render, screen, fireEvent } from '@testing-library/react';

import { BookingForm } from './components';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);

  const headingElement = screen.getByText("Reserve a table:");
  expect(headingElement).toBeInTheDocument();

  const dateLabel = screen.getByText("Choose date");
  expect(dateLabel).toBeInTheDocument();

  const timeLabel = screen.getByText("Choose time");
  expect(timeLabel).toBeInTheDocument();

  const numberLabel = screen.getByText("Number of guests");
  expect(numberLabel).toBeInTheDocument();

  const occasionLabel = screen.getByText("Occasion");
  expect(occasionLabel).toBeInTheDocument();

  const submitInput = screen.getByTestId("button-submit");
    fireEvent.click(submitInput);
})