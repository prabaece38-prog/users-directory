import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SearchBar } from "../components";

describe("SearchBar", () => {
  it("renders with the given value", () => {
    render(<SearchBar value="john" onChange={vi.fn()} />);
    expect(screen.getByRole("textbox")).toHaveValue("john");
  });

  it("calls onChange when the user types", async () => {
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} />);

    await userEvent.type(screen.getByRole("textbox"), "a");

    expect(onChange).toHaveBeenCalledWith("a");
  });
});
