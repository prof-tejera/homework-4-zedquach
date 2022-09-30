const Screen = ({ value, equation }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "100%",
        height: "110px",
        textAlign: "right",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          height: "30px",
        }}
      >
        {equation}
      </div>
      <div
        style={{
          direction: "rtl",
          width: "100%",
          height: "80px",
          fontSize: "50px",
          position: "relative",
          overflowX: "scroll",
          overflowY: "hidden",
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default Screen;
