import { Fragment } from "react";
import { IconButton } from "@mui/material";

import { IActionIconsProps } from "../interfaces";

const ActionIcons: React.FC<IActionIconsProps> = (props) => {
  const { icons } = props;
  return (
    <div className="bar action-icons">
      {icons?.map((icon, i) => {
        return (
          <Fragment key={i}>
            <IconButton
              sx={{ padding: 0, ml: 0.5, color: "#11b65e" }}
              title={icon.label}
              aria-label={icon.label}
              children={icon.icon}
            />
            {icon.noOfLikes && <span className="count">{icon.noOfLikes}</span>}
            {icon.noOfComments && (
              <span className="count">{icon.noOfComments}</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default ActionIcons;
