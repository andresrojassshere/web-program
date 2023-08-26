export function Number() {
  const numberStyle = {
    backgroundColor: "rgba( 255, 255, 255)",
    color: "black",
    width: "200px",
    height: "100px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "20px",
    margintRight: "20px",
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    fontWeight: "bold",
  };
  return (
    <div style={numberStyle}>
      <small> 0</small>
    </div>
  );
}
