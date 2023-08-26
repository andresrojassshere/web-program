export function Body() {
  const containerStyle = {
    Width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "url('https://wallpaperaccess.com/full/8738924.jpg')",
    backgroundSize: "cover",
    borderRadius: "2%",
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
          src="https://www.richter-messzeuge.de/fileadmin/products/972.png"
          style={imageStyle}
          alt="Descripción de la imagen"
        />
      </section>
    </main>
  );
}
