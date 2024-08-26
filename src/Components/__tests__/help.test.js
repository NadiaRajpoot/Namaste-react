import Help from "../../Components/Help"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";

test("should load help Component", ()=>{

  render(<Help/>);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();


})
