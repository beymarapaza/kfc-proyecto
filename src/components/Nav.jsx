import { Link } from "react-router-dom"


const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-nav shadow">
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand" href="#">
                            <img src="https://i.pinimg.com/originals/a9/82/d4/a982d4cbe6da996837820eb1e67d3d60.png" alt="" className="img-img-fluid logo" />
                        </a>

                    </div>
               
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="burger" >Burger</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="krunch" >Krunch</Link>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" className="avatar" /> <span className="perfil-kfc">Perfil KFC</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Nav