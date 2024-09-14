import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Krunch from "./Krunch"
import Burger from "./Burger"

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/krunch" element={<Krunch />}></Route>
                <Route path="/burger" element={<Burger />} ></Route>
            </Routes>
        </>
    )
}

export default Router