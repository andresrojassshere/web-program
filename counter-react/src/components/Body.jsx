
export function Body(){

    const sectionStyle = {
        minWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const imageStyle = {
        width: "500px",
        margin: "40px",
        marginLeft: "30px",
        marginTop: "0px"
    }

    return(
        <main>
            <section style={sectionStyle}>
                 <img src='https://m.media-amazon.com/images/I/51A445eaJrL._AC_UF894,1000_QL80_.jpg' style={imageStyle} alt="Descripción de la imagen" />
            </section>
        </main>
    )
}