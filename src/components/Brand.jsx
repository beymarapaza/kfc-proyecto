

const Brand = () => {
    return (
        <> <div className="row">
            <div className="col-md-6 my-5 text-center">
                <h2 className="text-black fw-bold">
                    TU DECIDES CÓMO SABOREAR KFC:
                </h2>

                <span className="texto-1">¿Entrega a domicilio o vienes por él?</span>

            </div>
            <div className="col-md-6 ">
                <div className="row my-3">
                    <div className="col-md-6"><button className="btn btn-danger fw-bolder shadow">ENTREGA A DOMICILIO</button></div>
                    <div className="col-md-6"><button className="btn btn-secondary fw-bolder text-black shadow">RECOGER EN TIENDA</button></div>
                </div>
                <h6 className="mx-0">Escribe tu dirección</h6>
                <div className="row gps-main">
                    <div className="col-md-1 bg-danger gps-container d-flex justify-content-center align-items-center"><i className="bi bi-crosshair2 text-white gps "></i></div>
                    <div className="col-md-8 text-start">

                        <input type="search" placeholder="Ingresa tu dirección" className="form-control search" />
                    </div>
                </div>
                <div className="my-2">

                    <i className="bi bi-map"></i><span className="direccion">Encuentra dirección en mapa</span>
                </div>
            </div>
        </div></>
    )
}

export default Brand