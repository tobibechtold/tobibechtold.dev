import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Index from "@/pages/Index";

describe("Index projects", () => {
  it("renders Feature Voting Tool with GitHub link and Open Source badge", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );

    const projectLink = screen.getByRole("link", { name: /Feature Voting Tool/i });

    expect(projectLink).toHaveAttribute("href", "https://github.com/tobibechtold/feature-voting-tool");
    expect(screen.getByText("Open Source")).toBeInTheDocument();
  });
});
