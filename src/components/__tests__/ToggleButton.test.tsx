import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThumbUp } from "@mui/icons-material";

import ToggleButton from "../toggleButton/ToggleButton";
import { IToggleButtonProps } from "../../interfaces";

function renderToggleButton(props: Partial<IToggleButtonProps> = {}) {
  const defaultProps: IToggleButtonProps = {
    icon: <ThumbUp />,
    clickHandler() {
      return;
    },
    label: "Show more",
  };

  return render(<ToggleButton {...defaultProps} {...props} />);
}

describe("<ToggleButton/>", () => {
  test("Button should be visible on page", async () => {
    const { findByTestId } = renderToggleButton();

    const button = await findByTestId("toggle-button");

    expect(button).toBeInTheDocument();
  });

  test("any function passed should work on click", async () => {
    const clickHandler = jest.fn();

    const { findByTestId } = renderToggleButton({ clickHandler });

    const button = await findByTestId("toggle-button");

    fireEvent.click(button);

    expect(clickHandler).toHaveReturnedWith("jabuka");
  });
});
