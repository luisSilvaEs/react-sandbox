import { render, screen, fireEvent } from "@testing-library/react";
import VideoPlayer from "../video/VideoPlayer";

// jsdom doesn't implement HTMLVideoElement.play/pause, so we mock them
beforeEach(() => {
  window.HTMLMediaElement.prototype.play = vi.fn().mockImplementation(function (
    this: HTMLMediaElement,
  ) {
    Object.defineProperty(this, "paused", { value: false, configurable: true });
  });
  window.HTMLMediaElement.prototype.pause = vi
    .fn()
    .mockImplementation(function (this: HTMLMediaElement) {
      Object.defineProperty(this, "paused", {
        value: true,
        configurable: true,
      });
    });
});

describe("VideoPlayer", () => {
  const src = "video.mp4";

  it("renders with Play button initially", () => {
    render(<VideoPlayer src={src} />);
    expect(screen.getByRole("button", { name: /play/i })).toBeInTheDocument();
  });

  it("changes label to Pause after clicking Play", () => {
    render(<VideoPlayer src={src} />);
    fireEvent.click(screen.getByRole("button", { name: /play/i }));
    expect(screen.getByRole("button", { name: /pause/i })).toBeInTheDocument();
  });

  it("changes label back to Play after clicking Pause", () => {
    render(<VideoPlayer src={src} />);
    fireEvent.click(screen.getByRole("button", { name: /play/i }));
    fireEvent.click(screen.getByRole("button", { name: /pause/i }));
    expect(screen.getByRole("button", { name: /play/i })).toBeInTheDocument();
  });
});
