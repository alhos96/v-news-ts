import { Chip } from "@mui/material";

import "./shared-with.css";
import Avatar from "../avatar/Avatar";
import { ISharedWithProps } from "../../interfaces";

const SharedWith: React.FC<ISharedWithProps> = (props) => {
  const { sharedWith } = props;

  const noOfShares = sharedWith.length; // number of users whom post have been shared with
  return (
    <dl
      title="Shared with"
      id="shared-with-list"
      className={noOfShares >= 2 ? "scrolable-shared-with-list" : ""}
      tabIndex={0}
    >
      <dt>Shared with:</dt>

      {noOfShares === 0 ? (
        <dd>Everyone</dd>
      ) : (
        sharedWith.map((share, i) => (
          <dd key={i} id="shared-with-chip">
            <Chip
              sx={{
                border: "1px solid gray",
                borderRadius: "5px",
                background: "transparent",
              }}
              avatar={<Avatar src={share.avatar} height={1.3} width={1.3} />}
              label={share.name}
            />
          </dd>
        ))
      )}
    </dl>
  );
};

export default SharedWith;
