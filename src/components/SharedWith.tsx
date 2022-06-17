import { Chip, Avatar } from "@mui/material";

import "./shared-with.css";
import { ISharedWithProps } from "../interfaces";

const SharedWith: React.FC<ISharedWithProps> = (props) => {
  const { sharedWith } = props;

  const noOfShares = sharedWith.length; // number of users whom post have been shared with
  return (
    <dl
      title="Shared with"
      id="shared-with-list"
      className={noOfShares >= 3 ? "scrolable-shared-with-list" : ""}
      tabIndex={0}
    >
      <dt>Shared with:</dt>

      {noOfShares === 0 ? (
        <dd>Everyone</dd>
      ) : (
        sharedWith.map((share, i) => (
          <dd key={i} id="shared-with-chip">
            <Chip
              avatar={
                <Avatar alt="" src={share.avatar} id="shared-with-avatar" />
              }
              label={share.name}
            />
          </dd>
        ))
      )}
    </dl>
  );
};

export default SharedWith;
