import {BrowserRouter,Routes,Route} from "react-router-dom"
import MegaSena from "../Pages/MegaSena/megaSena";
import Quina from "../Pages/Quina/quina"
import LotoFacil from "../Pages/LotoFacil/lotoFacil"
import LotoMania from "../Pages/LotoMania/lotoMania"
import TimeMania from "../Pages/TimeMania/timeMania"
import DiaDeSorte from "../Pages/DiaDeSorte/diaDeSorte"


const Router = () =>{
    return(
    <BrowserRouter>
        <Routes>
            <Route index element={<MegaSena/>}/>
            <Route path="/quina" element={<Quina/>}/>
            <Route path="/lotofacil" element={<LotoFacil/>}/>
            <Route path="/lotomania" element={<LotoMania/>}/>
            <Route path="/timemania" element={<TimeMania/>}/>
            <Route path="/diadesorte" element={<DiaDeSorte/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router;