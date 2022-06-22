interface IError {
  message: string; // message to show after timoute
}

const DisplayError: React.FC<IError> = (props) => {
  const { message } = props;

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
      {message}
    </div>
  );
};

export default DisplayError;
