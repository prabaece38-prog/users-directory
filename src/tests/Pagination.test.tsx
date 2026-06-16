import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "../components";

describe("Pagination", () => {
  it("disables 'Previous' on the first page", () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={vi.fn()} />);
    expect(screen.getByText("Previous")).toBeDisabled();
    expect(screen.getByText("Next")).not.toBeDisabled();
  });

  it("disables 'Next' on the last page", () => {
    render(<Pagination currentPage={3} totalPages={3} onPageChange={vi.fn()} />);
    expect(screen.getByText("Next")).toBeDisabled();
  });

  it("calls onPageChange with the next page number", async () => {
    const onPageChange = vi.fn();
    render(<Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />);

    await userEvent.click(screen.getByText("Next"));

    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
