import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // counter 숫자 테스트
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});
