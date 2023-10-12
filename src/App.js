import Calculator from "./components/Calculator";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "400px",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Calculator />
    </div>
  );
}

export default App;
