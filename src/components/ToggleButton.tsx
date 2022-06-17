import { Button } from "@mui/material";
import { styled } from "@mui/system";

import "./toggle-button.css";
import { IToggleButtonProps } from "../interfaces";

const CustomButton = styled(Button)`
  border: none;
  border-bottom: 1px solid #0fa958;
  border-radius: 0;
  text-transform: capitalize;
  background-color: transparent;
  margin-left: 1.5rem;
  letter-spacing: 0.012rem;
  color: #0fa958;
  cursor: pointer;
  padding: 0px 3px;
  margin-top: 1.1rem;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #11b65e;
    border-bottom: 1px solid #11b65e;
    background-color: transparent;
  }
`;

const ToggleButton: React.FC<IToggleButtonProps> = (props) => {
  const { icon, clickHandler, label, styles } = props;
  return (
    <CustomButton
      aria-hidden="true"
      sx={styles}
      variant="text"
      startIcon={icon}
      onClick={clickHandler}
    >
      <span>{label}</span>
    </CustomButton>
  );
};

export default ToggleButton;
