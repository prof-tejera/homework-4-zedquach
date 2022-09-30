const Screen = ({ value, equation }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "100%",
        height: "90px",
        textAlign: "right",
        marginBottom: "10px",
      }}
    >
      <div style={{height: "30px"}}>{equation}</div>
      <div style={{height: "60px", fontSize:"50px"}}>{value}</div>
    </div>
  );
};

export default Screen;
