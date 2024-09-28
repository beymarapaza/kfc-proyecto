

const Card = ({ imagen = "PON IMAGEN", precio, nombre }) => {
    return (
        <div className="my-5 card-container">
            <div className="card border-0 shadow">
                <div className="card-body text-center p-0">
                    <img src={imagen} alt="logo" className="card-img-top " />
                    <h2 className="card-title mt-2">{nombre}</h2>

                    <p className="">{precio}</p>
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