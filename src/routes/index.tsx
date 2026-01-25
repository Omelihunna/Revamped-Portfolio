import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "../pages";
import _404 from "../pages/404.tsx";
import Portfolio from "../pages/portfolio.tsx";

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Index/>}/>
                <Route path={'/portfolio'} element={<Portfolio/>}/>
                <Route path={'*'} element={<_404/>}/>
            </Routes>
        </BrowserRouter>
            )
}

export default AllRoutes;