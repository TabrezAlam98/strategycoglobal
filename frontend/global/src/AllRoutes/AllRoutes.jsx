import { Route, Routes } from "react-router-dom";
import Home from '../components/Home'
import Details from '../components/Details'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies/:imdbID" element={<Details />} />
     </Routes>
    </div>
  );
}
export default AllRoutes;
