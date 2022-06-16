import { IconButton } from "@mui/material";

import { IActionIconsProps } from "../interfaces";

const ActionIcons: React.FC<IActionIconsProps> = ({ icons }) => {
  return (
    <div className="action-icons">
      {icons?.map((icon, i) => {
        return (
          <IconButton
            sx={{ padding: 0, ml: 0.5, color: "#11b65e" }}
            title={icon.label}
            aria-label={icon.label}
            key={i}
            children={icon.icon}
          />
        );
      })}
    </div>
  );
};

export default ActionIcons;
