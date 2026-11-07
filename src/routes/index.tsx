import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "../pages";
import _404 from "../pages/404.tsx";
import Portfolio from "../pages/portfolio.tsx";
import Lab from "../pages/lab.tsx";
import V2 from "../pages/v2.tsx";

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Index/>}/>
                <Route path={'/portfolio'} element={<Portfolio/>}/>
                <Route path={'/lab/schematic'} element={<Lab/>}/>
                <Route path={'/v2'} element={<V2/>}/>
                <Route path={'*'} element={<_404/>}/>
            </Routes>
        </BrowserRouter>
            )
}

export default AllRoutes;