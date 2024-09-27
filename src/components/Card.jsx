

const Card = ({ imagen = "PON IMAGEN", precio, nombre }) => {
    return (
        <div className="my-5 card-container">
            <div className="card border-0 shadow">
                <div className="card-body text-center">
                    <img src={imagen} alt="logo" className="card-img-top " />
                    <h2 className="card-title mt-5">{nombre}</h2>

                    <p className="my-5">{precio}</p>
                </div>
            </div>
            <div className="row justify-content-center position-absolute carrito"  >
                <div className=" col-12 text-center">

                    <button className="btn btn-danger carrito-button">
                        <i className="bi bi-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card