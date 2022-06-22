import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

interface ILoader {
  message: string; // message to show after timoute
  timeout: number; // how long to wait for data
}

const Loader: React.FC<ILoader> = (props) => {
  const { message, timeout } = props;

  /** research how to type mu compoennts */
  const [content, setContent] = useState<any>(<CircularProgress />);

  useEffect(() => {
    let changeContent = setTimeout(() => setContent(message), timeout);

    return () => {
      clearTimeout(changeContent);
      setContent(
        <>
          <CircularProgress /> <br />
          loading
        </>
      );
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {content}
    </div>
  );
};

export default Loader;
