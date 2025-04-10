import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  render(<App />);
  
  
  expect(screen.getByTestId('app-container')).toBeInTheDocument();
  
  
  expect(screen.getByRole('banner')).toBeInTheDocument(); 
  expect(screen.getByRole('complementary')).toBeInTheDocument(); 
  expect(screen.getByRole('main')).toBeInTheDocument(); 
});
