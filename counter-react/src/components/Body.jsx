export function Body() {
  const containerStyle = {
    Width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "url('https://wallpaperaccess.com/full/8738924.jpg')",
    backgroundSize: "cover",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    marginRight: "100px",
    marginLeft: "100px",
  };

  const imageStyle = {
    width: "400px",
    margin: "40px",
    marginLeft: "30px",
    marginTop: "40px",
    borderRadius: "10%",
  };

  return (
    <main>
      <section style={containerStyle}>
        <img
          src="https://m.media-amazon.com/images/I/51A445eaJrL._AC_UF894,1000_QL80_.jpg"
          style={imageStyle}
          alt="Descripción de la imagen"
        />
      </section>
    </main>
  );
}
